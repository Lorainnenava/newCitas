import { ModuleRequestDto } from '../../../../entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../entities/module/dto/response/module/moduleResponse.dto';

export interface IModuleUpdateService {
  /**
   * update Module
   * @param request
   */
  update(request: ModuleRequestDto): Promise<ModuleResponseDto>;
}
