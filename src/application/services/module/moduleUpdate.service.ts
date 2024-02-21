import { Injectable } from '@nestjs/common';
import { ModuleRepository } from '../../../infrastructure/repository/module/module.repository';
import { IModuleUpdateService } from '../../../domain/interfaces/service/module/update/IModuleUpdateService';
import { ModuleRequestDto } from '../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/entities/module/dto/response/module/moduleResponse.dto';

@Injectable()
export class ModuleUpdateService implements IModuleUpdateService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * update module
   * @param request
   * @returns
   */
  async update(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return await this.moduleRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
