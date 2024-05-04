import { Inject, Injectable } from '@nestjs/common';
import { IModuleRepository } from '../../../../domain/interfaces/repository/module/IModule.repository';
import { ModuleResponseDto } from '../../../../domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModulesGetAllService } from '../../../../domain/interfaces/service/module/getAll/IModulesGetAllService';

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
