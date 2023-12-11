import {
  Body,
  Param,
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WelcomeEmailService } from '../welcomeEmail/welcomeEmail.service';
import { Patients } from '../../domain/collections/patients/schema/patiensts.entity';
import { IPatientApplication } from '../../domain/inferface/patients/IPatientApplication';
import { PatientRequestDto } from '../../domain/collections/patients/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../domain/collections/patients/dto/response/patient/patientResponse.dto';

/**
 * PatientService
 */
@Injectable()
export class PatientService implements IPatientApplication {
  constructor(
    @InjectModel(Patients.name) private readonly patientModel: Model<Patients>,
    private welcomeEmailService: WelcomeEmailService,
  ) {}

  /**
   * create patient
   * @param request
   */
  async create(
    @Body() requestPatient: PatientRequestDto,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findOne({
        firstName: requestPatient.firstName,
        firstLastName: requestPatient.firstLastName,
        'documentInfo.documentNumber':
          requestPatient.documentInfo.documentNumber,
      });
      if (searchPatient)
        throw new ConflictException('This patient already exists');

      // createPatient
      const createPatient = await new this.patientModel(requestPatient).save();

      // if the patient was created so you must send a email
      if (createPatient) {
        await this.welcomeEmailService.sendEmailWelcome(
          {
            email: createPatient.email,
            firstName: createPatient.firstName,
            fisrtLastName: createPatient.firstLastName,
            secondName: createPatient?.secondName,
            secondLastName: createPatient?.secondLastName,
          },
          `${process.env.URL}`,
        );
      }

      return createPatient.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * findById
   * @param _id
   */
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findById(_id);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * findOne
   * @param documentNumber
   */
  async findOne(documentNumber: number): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findOne({
        'documentInfo.documentNumber': documentNumber,
      });
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * update patient
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: PatientRequestDto,
    @Param('_id') _id: string,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findByIdAndUpdate(
        _id,
        request,
        { new: true },
      );
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll patient
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      return await this.patientModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete patient
   * @param _id
   */
  async delete(@Param('_id') _id: string): Promise<boolean> {
    try {
      const search = await this.patientModel.findById({ _id });
      if (!search) {
        throw new NotFoundException('This patient does not exist');
      }
      return (await this.patientModel.deleteOne({ _id })).acknowledged;
    } catch (error) {
      throw error;
    }
  }
}
