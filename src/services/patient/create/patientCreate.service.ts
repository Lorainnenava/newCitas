import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { PatientRequestDto } from 'src/domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientCreateService } from 'src/domain/interfaces/services/patient/create/IPatientCreateService';
import { UserCreateService } from 'src/services/user/create/userCreate.service';
import { WelcomeEmailPatientService } from 'src/shared/services/emails/welcomeEmailPatient/welcomeEmailPatient.service';

@Injectable()
export class PatientCreateService implements IPatientCreateService {
  constructor(
    @Inject('PatientRepository')
    private _patientRepository: IPatientRepository,
    private _userCreateService: UserCreateService,
    private _welcomeEmailPatientService: WelcomeEmailPatientService,
  ) {}

  /**
   * Crear un paciente
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

      if (searchPatient) throw new ConflictException('Este paciente ya existe');

      const createPatient = await this._patientRepository.create(request);

      // Una vez que se haya creado el paciente, automáticamente se generará su usuario y recibirán un correo de bienvenida.
      if (createPatient?._id) {
        await this._userCreateService.create({
          documentInfo: createPatient?.documentInfo,
          email: createPatient?.email,
          role: 'PACIENTE',
          state: false,
        });

        await this._welcomeEmailPatientService.sendEmailWelcome(
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
      throw new Error(error);
    }
  }
}
