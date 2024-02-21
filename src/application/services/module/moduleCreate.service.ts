import { Injectable, ConflictException } from '@nestjs/common';
import { ModuleRepository } from '../../../infrastructure/repository/module/module.repository';
import { IModuleCreateService } from '../../../domain/interfaces/service/module/create/IModuleCreateService';
import { ModuleRequestDto } from '../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/entities/module/dto/response/module/moduleResponse.dto';

@Injectable()
export class ModuleCreateService implements IModuleCreateService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * create module
   * @param request
   */
  async create(request: ModuleRequestDto): Promise<ModuleResponseDto> {
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
