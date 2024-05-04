import { Inject, Injectable } from '@nestjs/common';
import { DoctorResponseDto } from '../../../../domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from '../../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { IDoctorsGetAllService } from '../../../../domain/interfaces/service/doctor/getAll/IGetAllDoctorsService';

@Injectable()
export class DoctorsGetAllService implements IDoctorsGetAllService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * getAll doctors
   * @returns
   */
  async getAll(): Promise<DoctorResponseDto[]> {
    try {
      return await this._doctorRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
