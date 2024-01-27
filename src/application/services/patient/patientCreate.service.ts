import { Body, Injectable, ConflictException } from '@nestjs/common';
import { WelcomeEmailService } from '../welcomeEmail/welcomeEmail.service';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { IPatientCreateService } from '../../../domain/interfaces/service/patient/create/IPatientCreateService';
import { PatientRequestDto } from '../../../domain/dtos/patient/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/dtos/patient/response/patient/patientResponse.dto';

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
