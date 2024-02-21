import { Injectable, ConflictException } from '@nestjs/common';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { IDoctorCreateService } from '../../../domain/interfaces/service/doctor/create/IDoctorCreateService';
import { DoctorRequestDto } from '../../../domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/entities/doctor/dto/response/doctorResponse.dto';

@Injectable()
export class DoctorCreateService implements IDoctorCreateService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  /**
   * create doctor
   * @param request
   */
  async create(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      const searchDoctor = await this.doctorRepository.findOne({
        'documentInfo.documentNumber': Number(
          request.documentInfo.documentNumber,
        ),
      });
      if (searchDoctor)
        throw new ConflictException('This doctor already exists');
      return await this.doctorRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
