import { ModuleResponseDto } from '../../../../dtos/module/response/module/moduleResponse.dto';
import { ModuleRequestDto } from '../../../../dtos/module/request/module/moduleRequest.dto';

export interface IModuleUpdateService {
  /**
   * update Module
   * @param request
   */
  update(request: ModuleRequestDto): Promise<ModuleResponseDto>;
}
