import { Body, Param, Injectable } from '@nestjs/common';
import { ModuleRequestDto } from '../../dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../dtos/modules/response/modules/moduleResponse.dto';
import { ModuleRepository } from '../../../infrastructure/repository/modules/modules.repository';
import { IModuleUpdateService } from '../../../domain/interfaces/service/modules/update/IModulesUpdateService';

@Injectable()
export class ModuleUpdateService implements IModuleUpdateService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * update module
   * @param _id
   * @returns
   */
  async update(
    @Body() request: ModuleRequestDto,
    @Param('_id') _id: string,
  ): Promise<ModuleResponseDto> {
    try {
      return await this.moduleRepository.update(request, _id);
    } catch (error) {
      throw error;
    }
  }
}
