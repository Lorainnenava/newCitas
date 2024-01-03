import { Injectable } from '@nestjs/common';
import { RolesResponseDto } from '../../dtos/roles/response/rolesResponse.dto';
import { RolesRepository } from '../../../infrastructure/repository/roles/roles.repository';
import { IRolesGetAllService } from '../../../domain/interfaces/service/roles/getAll/IRolesGetAllService';

@Injectable()
export class RolesGetAllService implements IRolesGetAllService {
  constructor(private readonly RolesRepository: RolesRepository) {}

  /**
   * getAll role
   * @returns
   */
  async getAll(): Promise<RolesResponseDto[]> {
    try {
      return await this.RolesRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
