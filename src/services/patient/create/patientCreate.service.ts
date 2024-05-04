import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { WelcomeEmailService } from '../../emails/welcomeEmail/welcomeEmail.service';
import { IPatientRepository } from '../../../../domain/interfaces/repository/patient/IPatient.repository';
import { PatientRequestDto } from '../../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientCreateService } from '../../../../domain/interfaces/service/patient/create/IPatientCreateService';

@Injectable()
export class PatientCreateService implements IPatientCreateService {
  constructor(
    @Inject('PatientRepository')
    private _patientRepository: IPatientRepository,
    private welcomeEmailService: WelcomeEmailService,
  ) {}

  /**
   * create patient
   * @param request
   */
  async create(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this._patientRepository.findOne({
        'documentInfo.documentNumber': Number(
          request.documentInfo.documentNumber,
        ),
      });
      if (searchPatient)
        throw new ConflictException('This patient already exists');

      // createPatient
      const createPatient = await this._patientRepository.create(request);

      // if the patient was created so you must send a email
      if (createPatient) {
        await this.welcomeEmailService.sendEmailWelcome(
          {
            email: createPatient.email,
            firstName: createPatient.firstName,
            firstLastName: createPatient.firstLastName,
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
