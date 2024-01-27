import { Injectable } from '@nestjs/common';
import { RolRepository } from '../../../infrastructure/repository/rol/rol.repository';
import { IRolesGetAllService } from '../../../domain/interfaces/service/rol/getAll/IRolesGetAllService';
import { RolResponseDto } from '../../../domain/dtos/rol/response/rolResponse.dto';

@Injectable()
export class RolesGetAllService implements IRolesGetAllService {
  constructor(private readonly rolRepository: RolRepository) {}

  /**
   * getAll role
   * @returns
   */
  async getAll(): Promise<RolResponseDto[]> {
    try {
      return await this.rolRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
