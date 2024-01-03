import { Body, Injectable, ConflictException } from '@nestjs/common';
import { ModuleRequestDto } from '../../dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../dtos/modules/response/modules/moduleResponse.dto';
import { ModuleRepository } from '../../../infrastructure/repository/modules/modules.repository';
import { IModuleCreateService } from '../../../domain/interfaces/service/modules/create/IModulesCreateService';

@Injectable()
export class ModuleCreateService implements IModuleCreateService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * create module
   * @param request
   */
  async create(@Body() request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      const searchModule = await this.moduleRepository.findOne(request.name);
      if (searchModule)
        throw new ConflictException('This module already exists');
      return await this.moduleRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
