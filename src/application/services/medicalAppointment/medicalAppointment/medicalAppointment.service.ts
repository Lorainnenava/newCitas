import {
  Body,
  Param,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RequestUser } from '../../../../utils/types';
import { DoctorService } from './../../doctor/doctor.service';
import { PatientService } from '../../patient/patient.service';
import { InvoiceService } from '../../invoices/invoices.service';
import { DateService } from '../../../../utils/date/date.service';
import { CodeRandomService } from '../../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../../utils/description/description';
import { ObjectEntriesService } from '../../../../utils/objectEntries/objectEntries';
import { MedicalAppointment } from '../../../../domain/entities/medicalAppointments/medicalAppointment.entity';
import { ConfirmationMedicalAppointmentService } from '../../confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { MedicalAppointmentRequestDto } from '../../../dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentApplication } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/IMedicalAppointmentApplication';


/**
 * MedicalAppointmentService
 */
@Injectable()
export class MedicalAppointmentService
  implements IMedicalAppointmentApplication
{
  constructor(
    @InjectModel(MedicalAppointment.name)
    private readonly medicalAppointmentModel: Model<MedicalAppointment>,
    private readonly dateService: DateService,
    private readonly doctorService: DoctorService,
    private readonly patientService: PatientService,
    private readonly invoiceService: InvoiceService,
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
  async create(@Body() request: MedicalAppointmentRequestDto): Promise<MedicalAppointmentResponseDto> {
    try {
      // request dato of the user
      const searchDoctor = await this.doctorService.findOne(
        request.doctor.documentInfo.documentNumber,
      );

      // verify if the medicalAppointment exists
      const existingAppointment = await this.medicalAppointmentModel.findOne({
        state: true,
        date: request.date,
        'doctor.firstName': searchDoctor.firstName,
        timeAppointment: request.timeAppointment,
        'doctor.specialty': searchDoctor.specialty,
      });

      if (existingAppointment)
        throw new ConflictException('This medicalAppointment already exists');

      // request dato of the user
      const searchPatient = await this.patientService.findOne(
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
      const createMedicalAppointment = await new this.medicalAppointmentModel({
        ...request,
        userInfo: patient,
        doctor: await this.objectEntriesService.omitPropertiesFromObject(
          searchDoctor,
          propertiesToOmitDoctor,
        ),
      }).save();

      // verify if the code exists
      let generate: number;
      do {
        generate = this.codeRandomService.generateCode();
      } while (await this.invoiceService.findOne(generate));

      // create invoice
      await this.invoiceService.create({
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

  /**
   * findById medicalAppointment
   * @param _id
   * @returns
   */
  async findById(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const searchMedicalAppointment =
        await this.medicalAppointmentModel.findById(_id);
        
      if (searchMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return searchMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll medicalAppointment
   * @returns
   */
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAllById medicalAppointment
   * @param _id
   * @returns
   */
  async getAllById(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentModel.find({
        'userInfo.documentInfo.documentNumber': user.documentNumber,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * update medicalAppointment
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: MedicalAppointmentRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentModel.findByIdAndUpdate(
        _id,
        request,
        {
          new: true,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  async delete(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const deleteMedicalAppointment =
        await this.medicalAppointmentModel.findByIdAndDelete(_id);
      if (deleteMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return deleteMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
