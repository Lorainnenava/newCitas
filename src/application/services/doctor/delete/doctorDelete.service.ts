import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../../infrastructure/repository/doctor/doctor.repository';
import { DoctorResponseDto } from '../../../../domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorDeleteService } from '../../../../domain/interfaces/service/doctor/delete/IDoctorDeleteService';

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
      const deleteDoctor = await this.doctorRepository.delete({ _id });
      return deleteDoctor;
    } catch (error) {
      throw new Error(error);
    }
  }
}
