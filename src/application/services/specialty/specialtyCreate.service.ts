import { Injectable, Body } from '@nestjs/common';
import { SpecialtyRequestDto } from '../../dtos/specialty/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../dtos/specialty/response/specialtiesResponse.dto';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { ISpecialtyCreateService } from '../../../domain/interfaces/service/specialty/create/ISpecialtyCreateService';

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
