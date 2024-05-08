import { Inject, Injectable } from '@nestjs/common';
import { DoctorRequestDto } from 'src/domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorUpdateService } from 'src/domain/interfaces/services/doctor/update/IUpdateDoctorService';

@Injectable()
export class DoctorUpdateService implements IDoctorUpdateService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * update doctor
   * @param request
   * @returns
   */
  async update(
    _id: string,
    request: DoctorRequestDto,
  ): Promise<DoctorResponseDto> {
    try {
      return await this._doctorRepository.update({ _id }, request);
    } catch (error) {
      throw error;
    }
  }
}
