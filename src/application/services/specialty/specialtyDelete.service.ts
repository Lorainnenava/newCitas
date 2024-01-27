import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { ISpecialtyDeleteService } from '../../../domain/interfaces/service/specialty/delete/ISpecialtyDeleteService';
import { SpecialtyResponseDto } from '../../../domain/dtos/specialty/response/specialtyResponse.dto';

@Injectable()
export class SpecialtyDeleteService implements ISpecialtyDeleteService {
  constructor(private readonly specialtyRepository: SpecialtyRepository) {}

  /**
   * delete specialty
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<SpecialtyResponseDto> {
    try {
      const deleteSpecialty = await this.specialtyRepository.delete(_id);
      if (deleteSpecialty === null)
        throw new NotFoundException('This specialty does not exist');
      return deleteSpecialty;
    } catch (error) {
      throw error;
    }
  }
}
