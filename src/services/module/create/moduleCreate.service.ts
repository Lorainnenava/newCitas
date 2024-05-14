import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { ModuleRequestDto } from 'src/domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from 'src/domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleRepository } from 'src/domain/interfaces/infrastructure/module/IModule.repository';
import { IModuleCreateService } from 'src/domain/interfaces/services/module/create/IModuleCreateService';

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

      if (searchModule) throw new ConflictException('Este modulo ya existe');

      return await this._moduleRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
