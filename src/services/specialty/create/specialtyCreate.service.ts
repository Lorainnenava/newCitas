import { Inject, Injectable } from '@nestjs/common';
import { SpecialtyRequestDto } from 'src/domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from 'src/domain/entities/specialty/dto/response/specialtyResponse.dto';
import { ISpecialtyRepository } from 'src/domain/interfaces/infrastructure/specialty/ISpecialty.repository';
import { ISpecialtyCreateService } from 'src/domain/interfaces/services/specialty/create/ISpecialtyCreateService';

@Injectable()
export class SpecialtyCreateService implements ISpecialtyCreateService {
  constructor(
    @Inject('SpecialtyRepository')
    private readonly _specialtyRepository: ISpecialtyRepository,
  ) {}

  /**
   * create specialty
   * @param request
   */
  async create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto> {
    try {
      return await this._specialtyRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
