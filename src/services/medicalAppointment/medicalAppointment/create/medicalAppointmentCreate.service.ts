import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { DateService } from '../../../../../utils/date/date.service';
import { CodeRandomService } from '../../../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../../../utils/description/description.service';
import { ObjectEntriesService } from '../../../../../utils/objectEntries/objectEntries.service';
import { DoctorRequestDto } from '../../../../../domain/entities/doctor/dto/request/doctorRequest.dto';
import { IDoctorRepository } from '../../../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { IPatientRepository } from '../../../../../domain/interfaces/repository/patient/IPatient.repository';
import { IInvoiceRepository } from '../../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { ConfirmationMedicalAppointmentService } from '../../../emails/confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { PatientInformationRequestDto } from '../../../../../domain/entities/invoice/dto/request/patientInformation/patientInformationRequest.dto';
import { MedicalAppointmentRequestDto } from '../../../../../domain/entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentCreateService } from '../../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/create/ICreateMedicalAppointmentService';

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
          request.doctor.documentInfo.documentNumber,
        ),
      });

      // verify if the medicalAppointment exists
      const existingAppointment =
        await this._medicalAppointmentRepository.findOne({
          date: request.date,
          'doctor.documentInfo.documentNumber':
            searchDoctor.documentInfo.documentNumber,
          timeAppointment: request.timeAppointment,
          'doctor.specialty': searchDoctor.specialty,
        });

      if (existingAppointment)
        throw new ConflictException('This medicalAppointment already exists');

      // search patient
      const searchPatient = await this._patientRepository.findOne({
        'userInfo.documentInfo.documentNumber':
          request.userInfo.documentInfo.documentNumber,
      });

      // propertytoOmit patient
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
          request.doctor.specialty,
        ),
        patientInformation: createMedicalAppointment.userInfo,
        date: this.dateService.getCurrentDate(),
        cost: searchPatient.regimen === 'CONTRIBUTIVO' ? 5000 : 2500,
        _idMedicalAppointment: createMedicalAppointment._id,
      });

      if (createMedicalAppointment) {
        await this.confirmationMedicalAppointmentService.sendConfirmation({
          email: createMedicalAppointment.userInfo.email,
          firstName: createMedicalAppointment.userInfo.firstName,
          firstLastName: createMedicalAppointment.userInfo.firstLastName,
          secondName: createMedicalAppointment.userInfo.secondName,
          secondLastName: createMedicalAppointment.userInfo.secondLastName,
          timeAppointment: createMedicalAppointment.timeAppointment,
          doctor: `${createMedicalAppointment.doctor.firstName} ${createMedicalAppointment.doctor.secondName} ${createMedicalAppointment?.doctor.firstLastName} ${createMedicalAppointment.doctor?.secondLastName}`,
          date: createMedicalAppointment.date,
          specialty: createMedicalAppointment.doctor.specialty,
        });
      }
      return createMedicalAppointment;
    } catch (error) {
      throw error;
    }
  }
}
