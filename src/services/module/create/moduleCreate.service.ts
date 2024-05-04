import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { IModuleRepository } from '../../../../domain/interfaces/repository/module/IModule.repository';
import { ModuleRequestDto } from '../../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleCreateService } from '../../../../domain/interfaces/service/module/create/IModuleCreateService';

@Injectable()
export class ModuleCreateService implements IModuleCreateService {
  constructor(
    @Inject('ModuleRepository')
    private readonly _moduleRepository: IModuleRepository,
  ) {}

  /**
   * create module
   * @param request
   */
  async create(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      const searchModule = await this._moduleRepository.findOne({
        name: request.name,
      });
      if (searchModule)
        throw new ConflictException('This module already exists');
      return await this._moduleRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
