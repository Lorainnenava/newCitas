import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { RolesResponseDto } from '../../dtos/roles/response/rolesResponse.dto';
import { RolesRepository } from '../../../infrastructure/repository/roles/roles.repository';
import { IRolesDeleteService } from '../../../domain/interfaces/service/roles/delete/IRolesDeleteService';

@Injectable()
export class RolesDeleteService implements IRolesDeleteService {
  constructor(private readonly RolesRepository: RolesRepository) {}

  /**
   * delete role
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<RolesResponseDto> {
    try {
      const deleteRole = await this.RolesRepository.delete(_id);
      if (deleteRole === null)
        throw new NotFoundException('This specialty does not exist');
      return deleteRole;
    } catch (error) {
      throw error;
    }
  }
}
