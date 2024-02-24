import { Inject, Injectable } from '@nestjs/common';
import { SpecialtyResponseDto } from '../../../../domain/entities/specialty/dto/response/specialtyResponse.dto';
import { ISpecialtyRepository } from '../../../../domain/interfaces/repository/specialty/ISpecialty.repository';
import { ISpecialtiesGetAllService } from '../../../../domain/interfaces/service/specialty/getAll/ISpecialtiesGetAllService';

@Injectable()
export class SpecialtiesGetAllService implements ISpecialtiesGetAllService {
  constructor(
    @Inject('SpecialtyRepository')
    private readonly _specialtyRepository: ISpecialtyRepository,
  ) {}

  /**
   * getAll specialties
   * @returns
   */
  async getAll(): Promise<SpecialtyResponseDto[]> {
    try {
      return this._specialtyRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
