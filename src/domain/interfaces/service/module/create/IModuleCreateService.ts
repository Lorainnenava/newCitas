import { ModuleRequestDto } from '../../../../entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../entities/module/dto/response/module/moduleResponse.dto';

export interface IModuleCreateService {
  /**
   * create module
   * @param request
   */
  create(request: ModuleRequestDto): Promise<ModuleResponseDto>;
}
