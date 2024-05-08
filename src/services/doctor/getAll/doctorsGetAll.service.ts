import { Inject, Injectable } from '@nestjs/common';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorsGetAllService } from 'src/domain/interfaces/services/doctor/getAll/IGetAllDoctorsService';

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
