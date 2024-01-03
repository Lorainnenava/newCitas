import { Body, Injectable, ConflictException } from '@nestjs/common';
import { RolesRequestDto } from '../../dtos/roles/request/rolesRequest.dto';
import { RolesResponseDto } from '../../dtos/roles/response/rolesResponse.dto';
import { RolesRepository } from '../../../infrastructure/repository/roles/roles.repository';
import { IRolesCreateService } from '../../../domain/interfaces/service/roles/create/IRolesCreateService';

@Injectable()
export class RolesCreateService implements IRolesCreateService {
  constructor(private readonly RolesRepository: RolesRepository) {}

  /**
   * create role
   * @param request
   */
  async create(@Body() request: RolesRequestDto): Promise<RolesResponseDto> {
    try {
      const searchRole = await this.RolesRepository.findOne(request.name);
      if (searchRole) throw new ConflictException('This role already exists');
      return await this.RolesRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
