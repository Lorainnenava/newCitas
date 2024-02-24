import { Inject, Injectable } from '@nestjs/common';
import { IModuleRepository } from '../../../../domain/interfaces/repository/module/IModule.repository';
import { ModuleRequestDto } from '../../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleUpdateService } from '../../../../domain/interfaces/service/module/update/IModuleUpdateService';

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
