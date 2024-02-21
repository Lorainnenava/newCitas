import { Injectable } from '@nestjs/common';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { ISpecialtiesGetAllService } from '../../../domain/interfaces/service/specialty/getAll/ISpecialtiesGetAllService';
import { SpecialtyResponseDto } from '../../../domain/entities/specialty/dto/response/specialtyResponse.dto';

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
