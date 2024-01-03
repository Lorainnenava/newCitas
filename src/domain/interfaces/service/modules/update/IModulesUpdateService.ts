import { ModuleRequestDto } from '../../../../../application/dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../../application/dtos/modules/response/modules/moduleResponse.dto';

export interface IModuleUpdateService {
  /**
   * delete Module
   * @param request
   * @param _id
   */
  update(request: ModuleRequestDto, _id: string): Promise<ModuleResponseDto>;
}
