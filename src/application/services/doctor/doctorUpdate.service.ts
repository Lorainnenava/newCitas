import { Body, Param, Injectable } from '@nestjs/common';
import { DoctorRequestDto } from '../../dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../dtos/doctor/response/doctorResponse.dto';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorUpdateService } from '../../../domain/interfaces/service/doctors/update/IDoctorUpdateService';

@Injectable()
export class DoctorUpdateService implements IDoctorUpdateService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * update doctor
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: DoctorRequestDto,
    @Param('_id') _id: string,
  ): Promise<DoctorResponseDto> {
    try {
      return await this.doctorRepository.update(request, _id);
    } catch (error) {
      throw error;
    }
  }
}
