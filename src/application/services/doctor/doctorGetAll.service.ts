import { Injectable } from '@nestjs/common';
import { DoctorResponseDto } from '../../dtos/doctor/response/doctorResponse.dto';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorGetAllService } from '../../../domain/interfaces/service/doctors/getAll/IDoctorGetAllService';

@Injectable()
export class DoctorGetAllService implements IDoctorGetAllService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * getAll doctor
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
