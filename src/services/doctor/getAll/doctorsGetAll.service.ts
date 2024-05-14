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
   * Obtener todos los doctores
   * @returns
   */
  async getAll(): Promise<DoctorResponseDto[]> {
    try {
      const obtainDoctors = await this._doctorRepository.getAll();

      return obtainDoctors;
    } catch (error) {
      throw error;
    }
  }
}
