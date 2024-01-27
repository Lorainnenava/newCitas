import { ModuleRequestDto } from '../../../../dtos/module/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../dtos/module/response/module/moduleResponse.dto';

export interface IModuleCreateService {
  /**
   * create module
   * @param request
   */
  create(request: ModuleRequestDto): Promise<ModuleResponseDto>;
}
