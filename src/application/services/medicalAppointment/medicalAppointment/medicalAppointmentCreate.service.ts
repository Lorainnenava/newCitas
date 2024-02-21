import { DateService } from '../../../../utils/date/date.service';
import { Injectable, ConflictException } from '@nestjs/common';
import { DoctorFindOneService } from '../../doctor/doctorFindOne.service';
import { PatientFindOneService } from '../../patient/patientFindOne.service';
import { InvoiceCreateService } from '../../invoice/invoiceCreate.service';
import { CodeRandomService } from '../../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../../utils/description/description.service';
import { InvoiceFindOneService } from '../../invoice/invoiceFindOne.service';
import { ObjectEntriesService } from '../../../../utils/objectEntries/objectEntries.service';
import { ConfirmationMedicalAppointmentService } from '../../confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IMedicalAppointmentCreateService } from '../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/create/IMedicalAppointmentCreateService';
import { MedicalAppointmentRequestDto } from '../../../../domain/entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { PatientInformationRequestDto } from '../../../../domain/entities/invoice/dto/request/patientInformation/patientInformationRequest.dto';
import { DoctorRequestDto } from '../../../../domain/entities/doctor/dto/request/doctorRequest.dto';

@Injectable()
export class MedicalAppointmentCreateService
  implements IMedicalAppointmentCreateService
{
  constructor(
    private readonly dateService: DateService,
    private readonly doctorService: DoctorFindOneService,
    private readonly codeRandomService: CodeRandomService,
    private readonly descriptionService: DescriptionService,
    private readonly objectEntriesService: ObjectEntriesService,
    private readonly invoiceCreateService: InvoiceCreateService,
    private readonly invoiceFindOneService: InvoiceFindOneService,
    private readonly patientFindOneService: PatientFindOneService,
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
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
      const searchDoctor = await this.doctorService.findOne(
        request.doctor.documentInfo.documentNumber,
      );

      // verify if the medicalAppointment exists
      const existingAppointment =
        await this.medicalAppointmentRepository.findOne({
          date: request.date,
          'doctor.documentInfo.documentNumber':
            searchDoctor.documentInfo.documentNumber,
          timeAppointment: request.timeAppointment,
          'doctor.specialty': searchDoctor.specialty,
        });

      if (existingAppointment)
        throw new ConflictException('This medicalAppointment already exists');

      // search patient
      const searchPatient = await this.patientFindOneService.findOne(
        request.userInfo.documentInfo.documentNumber,
      );

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
        await this.medicalAppointmentRepository.create({
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
      } while (await this.invoiceFindOneService.findOne(generate));

      // create invoice
      await this.invoiceCreateService.create({
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
          fisrtLastName: createMedicalAppointment.userInfo.firstLastName,
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
