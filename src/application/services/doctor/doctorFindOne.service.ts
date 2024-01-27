import { Injectable, NotFoundException } from '@nestjs/common';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorFindOneService } from '../../../domain/interfaces/service/doctor/findOne/IDoctorFindOneService';
import { DoctorResponseDto } from '../../../domain/dtos/doctor/response/doctorResponse.dto';

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
      const findDoctor = await this.doctorRepository.findOne(documentNumber);
      if (!findDoctor)
        throw new NotFoundException('This doctor does not exist');
      return findDoctor;
    } catch (error) {
      throw error;
    }
  }
}
