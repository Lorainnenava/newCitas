import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorUpdateService } from '../../../domain/interfaces/service/doctor/update/IDoctorUpdateService';
import { DoctorRequestDto } from '../../../domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/entities/doctor/dto/response/doctorResponse.dto';

@Injectable()
export class DoctorUpdateService implements IDoctorUpdateService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

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
      return await this.doctorRepository.update({ _id }, request);
    } catch (error) {
      throw error;
    }
  }
}
