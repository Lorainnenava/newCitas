import { Injectable } from '@nestjs/common';
import { DoctorResponseDto } from '../../dtos/doctor/response/doctorResponse.dto';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorFindOneService } from '../../../domain/interfaces/service/doctors/findOne/IDoctorFindOneService';

@Injectable()
export class DoctorFindOneService implements IDoctorFindOneService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * findOne doctor
   * @param documentNumber
   * @returns
   */
  async findOne(documentNumber: number): Promise<DoctorResponseDto> {
    try {
      return await this.doctorRepository.findOne(documentNumber);
    } catch (error) {
      throw error;
    }
  }
}
