import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { DoctorRequestDto } from 'src/domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IUserRepository } from 'src/domain/interfaces/infrastructure/user/IUser.repository';
import { IDoctorCreateService } from 'src/domain/interfaces/services/doctor/create/IDoctorCreateService';

@Injectable()
export class DoctorCreateService implements IDoctorCreateService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
    @Inject('UserRepository')
    private _userRepository: IUserRepository,
  ) {}

  /**
   * Crear un doctor
   * @param request
   */
  async create(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      const searchDoctor = await this._doctorRepository.findOne({
        'documentInfo.documentNumber': Number(
          request?.documentInfo?.documentNumber,
        ),
      });

      if (searchDoctor) throw new ConflictException('Este doctor ya existe');

      const createDoctor = await this._doctorRepository.create(request);

      // Crear un usuario con rol doctor
      if (createDoctor?._id) {
        await this._userRepository.create({
          documentInfo: createDoctor?.documentInfo,
          email: createDoctor?.email,
          role: 'DOCTOR',
          state: false,
        });
      }

      return createDoctor;
    } catch (error) {
      throw new Error(error);
    }
  }
}
