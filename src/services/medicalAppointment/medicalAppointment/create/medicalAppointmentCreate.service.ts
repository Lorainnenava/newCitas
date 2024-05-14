import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { DoctorRequestDto } from 'src/domain/entities/doctor/dto/request/doctorRequest.dto';
import { PatientInformationRequestDto } from 'src/domain/entities/invoice/dto/request/patientInformation/patientInformationRequest.dto';
import { MedicalAppointmentRequestDto } from 'src/domain/entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IMedicalAppointmentCreateService } from 'src/domain/interfaces/services/medicalAppointment/medicalAppointment/create/ICreateMedicalAppointmentService';
import { ConfirmationMedicalAppointmentService } from 'src/shared/services/emails/confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { CodeRandomService } from 'src/shared/utils/code/codeRandom.service';
import { DateService } from 'src/shared/utils/date/date.service';
import { DescriptionService } from 'src/shared/utils/description/description.service';
import { ObjectEntriesService } from 'src/shared/utils/objectEntries/objectEntries.service';

@Injectable()
export class MedicalAppointmentCreateService
  implements IMedicalAppointmentCreateService
{
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
    @Inject('PatientRepository')
    private readonly _patientRepository: IPatientRepository,
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
    private readonly dateService: DateService,
    private readonly codeRandomService: CodeRandomService,
    private readonly descriptionService: DescriptionService,
    private readonly objectEntriesService: ObjectEntriesService,
    private readonly confirmationMedicalAppointmentService: ConfirmationMedicalAppointmentService,
  ) {}

  /**
   * method create
   * @param request
   * @param user
   */
  async create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      // search doctor
      const searchDoctor = await this._doctorRepository.findOne({
        'documentInfo.documentNumber': Number(
          request?.doctor?.documentInfo?.documentNumber,
        ),
      });

      // verify if the medicalAppointment exists
      const existingAppointment =
        await this._medicalAppointmentRepository.findOne({
          date: request?.date,
          'doctor.documentInfo.documentNumber':
            searchDoctor?.documentInfo?.documentNumber,
          timeAppointment: request?.timeAppointment,
          'doctor.specialty': searchDoctor?.specialty,
        });

      if (existingAppointment)
        throw new ConflictException('Ya existe una cita igual');

      // search patient
      const searchPatient = await this._patientRepository.findOne({
        'userInfo.documentInfo.documentNumber':
          request?.userInfo?.documentInfo?.documentNumber,
      });

      // propertyToOmit patient
      const propertiesToOmitPatient = [
        '_id',
        'dateOfBirth',
        'placeOfBirth',
        'mobileNumber',
        'address',
        'regimen',
        'createdAt',
        'updatedAt',
        '__v',
      ];

      // propertyToOmit doctor
      const propertiesToOmitDoctor = ['_id', 'createdAt', 'updatedAt', '__v'];

      const patient = await this.objectEntriesService.omitPropertiesFromObject(
        searchPatient,
        propertiesToOmitPatient,
      );

      // createMedicalAppointment
      const createMedicalAppointment =
        await this._medicalAppointmentRepository.create({
          ...request,
          userInfo: patient as PatientInformationRequestDto,
          doctor: (await this.objectEntriesService.omitPropertiesFromObject(
            searchDoctor,
            propertiesToOmitDoctor,
          )) as DoctorRequestDto,
        });

      // verify if the code exists
      let generate: number;
      do {
        generate = this.codeRandomService.generateCode();
      } while (
        await this._invoiceRepository.findOne({ code: Number(generate) })
      );

      // create invoice
      await this._invoiceRepository.create({
        code: generate,
        description: await this.descriptionService.createDescription(
          request?.doctor?.specialty,
        ),
        patientInformation: createMedicalAppointment?.userInfo,
        date: this.dateService.getCurrentDate(),
        cost: searchPatient?.regimen === 'CONTRIBUTIVO' ? 5000 : 2500,
        _idMedicalAppointment: createMedicalAppointment?._id,
      });

      if (createMedicalAppointment) {
        await this.confirmationMedicalAppointmentService.sendConfirmation({
          email: createMedicalAppointment?.userInfo?.email,
          firstName: createMedicalAppointment?.userInfo?.firstName,
          firstLastName: createMedicalAppointment?.userInfo?.firstLastName,
          secondName: createMedicalAppointment?.userInfo?.secondName,
          secondLastName: createMedicalAppointment?.userInfo?.secondLastName,
          timeAppointment: createMedicalAppointment?.timeAppointment,
          doctor: `${createMedicalAppointment?.doctor?.firstName} ${createMedicalAppointment?.doctor?.secondName} ${createMedicalAppointment?.doctor?.firstLastName} ${createMedicalAppointment?.doctor?.secondLastName}`,
          date: createMedicalAppointment?.date,
          specialty: createMedicalAppointment?.doctor?.specialty,
        });
      }

      return createMedicalAppointment;
    } catch (error) {
      throw error;
    }
  }
}
