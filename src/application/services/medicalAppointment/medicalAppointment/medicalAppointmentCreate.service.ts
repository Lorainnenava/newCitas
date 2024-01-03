import { DateService } from '../../../../utils/date/date.service';
import { Body, Injectable, ConflictException } from '@nestjs/common';
import { DoctorFindOneService } from '../../doctor/doctorFindOne.service';
import { PatientFindOneService } from '../../patient/patientFindOne.service';
import { InvoiceCreateService } from '../../invoices/invoicesCreate.service';
import { CodeRandomService } from '../../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../../utils/description/description';
import { InvoiceFindOneService } from '../../invoices/invoicesFindOne.service';
import { DoctorRequestDto } from '../../../dtos/doctor/request/doctorRequest.dto';
import { ObjectEntriesService } from '../../../../utils/objectEntries/objectEntries';
import { PatientInformationRequestDto } from '../../../dtos/invoice/request/patientInformation/patientInformationRequest.dto';
import { ConfirmationMedicalAppointmentService } from '../../confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentRequestDto } from '../../../dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentCreateService } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/create/IMedicalAppointmentCreateService';

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
    @Body() request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      // search doctor
      const searchDoctor = await this.doctorService.findOne(
        request.doctor.documentInfo.documentNumber,
      );

      // verify if the medicalAppointment exists
      const existingAppointment =
        await this.medicalAppointmentRepository.findOne(
          request.date,
          searchDoctor.firstName,
          request.timeAppointment,
          searchDoctor.specialty,
        );

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
