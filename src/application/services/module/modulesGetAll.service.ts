import { Injectable } from '@nestjs/common';
import { ModuleRepository } from '../../../infrastructure/repository/module/module.repository';
import { IModulesGetAllService } from '../../../domain/interfaces/service/module/getAll/IModulesGetAllService';
import { ModuleResponseDto } from '../../../domain/dtos/module/response/module/moduleResponse.dto';

@Injectable()
export class ModulesGetAllService implements IModulesGetAllService {
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
