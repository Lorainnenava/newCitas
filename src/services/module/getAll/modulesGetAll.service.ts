import { Inject, Injectable } from '@nestjs/common';
import { ModuleResponseDto } from 'src/domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleRepository } from 'src/domain/interfaces/infrastructure/module/IModule.repository';
import { IModulesGetAllService } from 'src/domain/interfaces/services/module/getAll/IModulesGetAllService';

@Injectable()
export class ModulesGetAllService implements IModulesGetAllService {
  constructor(
    @Inject('ModuleRepository')
    private readonly _moduleRepository: IModuleRepository,
  ) {}

  /**
   * getAll module
   * @returns
   */
  async getAll(): Promise<ModuleResponseDto[]> {
    try {
      return await this._moduleRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
