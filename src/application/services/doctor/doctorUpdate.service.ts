import { Body, Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorUpdateService } from '../../../domain/interfaces/service/doctor/update/IDoctorUpdateService';
import { DoctorRequestDto } from '../../../domain/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/dtos/doctor/response/doctorResponse.dto';

@Injectable()
export class DoctorUpdateService implements IDoctorUpdateService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * update doctor
   * @param request
   * @returns
   */
  async update(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      return await this.doctorRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
