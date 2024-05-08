import { Inject, Injectable } from '@nestjs/common';
import { RolResponseDto } from 'src/domain/entities/rol/dto/response/rolResponse.dto';
import { IRolRepository } from 'src/domain/interfaces/infrastructure/rol/IRol.repository';
import { IRolesGetAllService } from 'src/domain/interfaces/services/rol/getAll/IRolesGetAllService';

@Injectable()
export class RolesGetAllService implements IRolesGetAllService {
  constructor(
    @Inject('RolRepository') private readonly _rolRepository: IRolRepository,
  ) {}

  /**
   * getAll role
   * @returns
   */
  async getAll(): Promise<RolResponseDto[]> {
    try {
      return await this._rolRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
