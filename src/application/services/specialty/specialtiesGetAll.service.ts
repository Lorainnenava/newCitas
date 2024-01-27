import { Injectable } from '@nestjs/common';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { SpecialtyResponseDto } from '../../../domain/dtos/specialty/response/specialtyResponse.dto';
import { ISpecialtiesGetAllService } from '../../../domain/interfaces/service/specialty/getAll/ISpecialtiesGetAllService';

@Injectable()
export class SpecialtiesGetAllService implements ISpecialtiesGetAllService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  /**
   * getAll specialties
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
