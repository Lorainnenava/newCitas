import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorsGetAllService } from '../../../domain/interfaces/service/doctor/getAll/IDoctorsGetAllService';
import { DoctorResponseDto } from '../../../domain/entities/doctor/dto/response/doctorResponse.dto';

@Injectable()
export class DoctorsGetAllService implements IDoctorsGetAllService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * getAll doctors
   * @returns
   */
  async getAll(): Promise<DoctorResponseDto[]> {
    try {
      return await this.doctorRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
