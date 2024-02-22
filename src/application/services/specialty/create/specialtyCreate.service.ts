import { Injectable } from '@nestjs/common';
import { SpecialtyRepository } from '../../../../infrastructure/repository/specialty/specialty.repository';
import { SpecialtyRequestDto } from '../../../../domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../../domain/entities/specialty/dto/response/specialtyResponse.dto';
import { ISpecialtyCreateService } from '../../../../domain/interfaces/service/specialty/create/ISpecialtyCreateService';

@Injectable()
export class SpecialtyCreateService implements ISpecialtyCreateService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  /**
   * create specialty
   * @param request
   */
  async create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto> {
    try {
      return await this.specialtyRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
