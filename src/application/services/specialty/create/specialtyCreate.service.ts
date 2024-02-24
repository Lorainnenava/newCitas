import { Inject, Injectable } from '@nestjs/common';
import { SpecialtyRequestDto } from '../../../../domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../../domain/entities/specialty/dto/response/specialtyResponse.dto';
import { ISpecialtyRepository } from '../../../../domain/interfaces/repository/specialty/ISpecialty.repository';
import { ISpecialtyCreateService } from '../../../../domain/interfaces/service/specialty/create/ISpecialtyCreateService';

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
