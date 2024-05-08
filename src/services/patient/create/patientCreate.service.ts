import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { PatientRequestDto } from 'src/domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientCreateService } from 'src/domain/interfaces/services/patient/create/IPatientCreateService';
import { WelcomeEmailService } from 'src/shared/services/emails/welcomeEmail/welcomeEmail.service';

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
        $or: [
          {
            'documentInfo.documentNumber': Number(
              request?.documentInfo?.documentNumber,
            ),
          },
          { email: request?.email },
        ],
      });

      if (searchPatient)
        throw new ConflictException('This patient already exists');

      // createPatient
      const createPatient = await this._patientRepository.create(request);

      // if the patient was created so you must send a email
      if (createPatient?._id) {
        await this.welcomeEmailService.sendEmailWelcome(
          {
            email: createPatient?.email,
            firstName: createPatient?.firstName,
            firstLastName: createPatient?.firstLastName,
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
