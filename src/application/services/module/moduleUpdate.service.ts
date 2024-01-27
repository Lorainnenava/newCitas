import { Body, Injectable } from '@nestjs/common';
import { ModuleRepository } from '../../../infrastructure/repository/module/module.repository';
import { IModuleUpdateService } from '../../../domain/interfaces/service/module/update/IModuleUpdateService';
import { ModuleRequestDto } from '../../../domain/dtos/module/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/dtos/module/response/module/moduleResponse.dto';

@Injectable()
export class ModuleUpdateService implements IModuleUpdateService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * update module
   * @param request
   * @returns
   */
  async update(@Body() request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return await this.moduleRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
