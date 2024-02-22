import { Injectable } from '@nestjs/common';
import { ModuleRepository } from '../../../../infrastructure/repository/module/module.repository';
import { ModuleResponseDto } from '../../../../domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModulesGetAllService } from '../../../../domain/interfaces/service/module/getAll/IModulesGetAllService';

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
