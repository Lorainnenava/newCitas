import { ModuleRequestDto } from '../../../../../application/dtos/modules/request/modules/moduleRequest.dto';

export interface IModuleCreateService {
  /**
   * create module
   * @param request
   */
  create(request: ModuleRequestDto): Promise<object>;
}
