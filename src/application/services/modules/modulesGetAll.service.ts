import { Injectable } from '@nestjs/common';
import { ModuleResponseDto } from '../../dtos/modules/response/modules/moduleResponse.dto';
import { ModuleRepository } from '../../../infrastructure/repository/modules/modules.repository';
import { IModuleGetAllService } from '../../../domain/interfaces/service/modules/getAll/IModulesGetAllService';

@Injectable()
export class ModuleGetAllService implements IModuleGetAllService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  /**
   * getAll module
   * @returns
   */
  async getAll(): Promise<ModuleResponseDto[]> {
    try {
      return await this.moduleRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
