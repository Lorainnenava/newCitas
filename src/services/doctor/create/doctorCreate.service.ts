import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { DoctorRequestDto } from 'src/domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorCreateService } from 'src/domain/interfaces/services/doctor/create/IDoctorCreateService';

@Injectable()
export class DoctorCreateService implements IDoctorCreateService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * create doctor
   * @param request
   */
  async create(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      const searchDoctor = await this._doctorRepository.findOne({
        'documentInfo.documentNumber': Number(
          request.documentInfo.documentNumber,
        ),
      });
      if (searchDoctor)
        throw new ConflictException('This doctor already exists');
      return await this._doctorRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
