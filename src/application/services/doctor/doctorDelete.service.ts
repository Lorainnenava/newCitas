import { Injectable } from '@nestjs/common';
import { DoctorResponseDto } from '../../dtos/doctor/response/doctorResponse.dto';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorDeleteService } from '../../../domain/interfaces/service/doctors/delete/IDoctorDeleteService';

@Injectable()
export class DoctorDeleteService implements IDoctorDeleteService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<DoctorResponseDto> {
    try {
      return await this.doctorRepository.delete(_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
