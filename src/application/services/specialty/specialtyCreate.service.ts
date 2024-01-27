import { Injectable, Body } from '@nestjs/common';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { ISpecialtyCreateService } from '../../../domain/interfaces/service/specialty/create/ISpecialtyCreateService';
import { SpecialtyRequestDto } from '../../../domain/dtos/specialty/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/dtos/specialty/response/specialtyResponse.dto';

@Injectable()
export class SpecialtyCreateService implements ISpecialtyCreateService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  /**
   * create specialty
   * @param request
   */
  async create(
    @Body() request: SpecialtyRequestDto,
  ): Promise<SpecialtyResponseDto> {
    try {
      return await this.specialtyRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
