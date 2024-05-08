import { Inject, Injectable } from '@nestjs/common';
import { ModuleRequestDto } from 'src/domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from 'src/domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleRepository } from 'src/domain/interfaces/infrastructure/module/IModule.repository';
import { IModuleUpdateService } from 'src/domain/interfaces/services/module/update/IModuleUpdateService';

@Injectable()
export class ModuleUpdateService implements IModuleUpdateService {
  constructor(
    @Inject('ModuleRepository')
    private readonly _moduleRepository: IModuleRepository,
  ) {}

  /**
   * update module
   * @param request
   * @returns
   */
  async update(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return await this._moduleRepository.update(request._id, request);
    } catch (error) {
      throw error;
    }
  }
}
