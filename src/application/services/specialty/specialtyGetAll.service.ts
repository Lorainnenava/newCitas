import { Injectable } from '@nestjs/common';
import { SpecialtyResponseDto } from '../../dtos/specialty/response/specialtiesResponse.dto';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { ISpecialtyGetAllService } from '../../../domain/interfaces/service/specialty/getAll/ISpecialtyGetAllService';

@Injectable()
export class SpecialtyGetAllService implements ISpecialtyGetAllService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  /**
   * getAll specialty
   * @returns
   */
  async getAll(): Promise<SpecialtyResponseDto[]> {
    try {
      return this.specialtyRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
