import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { RolRepository } from '../../../infrastructure/repository/rol/rol.repository';
import { IRolDeleteService } from '../../../domain/interfaces/service/rol/delete/IRolDeleteService';
import { RolResponseDto } from '../../../domain/dtos/rol/response/rolResponse.dto';

@Injectable()
export class RolDeleteService implements IRolDeleteService {
  constructor(private readonly rolRepository: RolRepository) {}

  /**
   * delete rol
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<RolResponseDto> {
    try {
      const deleteRole = await this.rolRepository.delete(_id);
      if (deleteRole === null)
        throw new NotFoundException('This specialty does not exist');
      return deleteRole;
    } catch (error) {
      throw error;
    }
  }
}
