import { Body, Injectable, ConflictException } from '@nestjs/common';
import { WelcomeEmailService } from '../welcomeEmail/welcomeEmail.service';
import { PatientRequestDto } from '../../dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../dtos/patients/response/patient/patientResponse.dto';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientCreateService } from '../../../domain/interfaces/service/patients/create/IPatientCreateService';

@Injectable()
export class PatientCreateService implements IPatientCreateService {
  constructor(
    private patientRepository: PatientRepository,
    private welcomeEmailService: WelcomeEmailService,
  ) {}

  /**
   * create patient
   * @param request
   */
  async create(
    @Body() request: PatientRequestDto,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.findOne(
        request.documentInfo.documentNumber,
      );
      if (searchPatient)
        throw new ConflictException('This patient already exists');

      // createPatient
      const createPatient = await this.patientRepository.create(request);

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

      return createPatient;
    } catch (error) {
      throw error;
    }
  }
}
