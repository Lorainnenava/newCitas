import { ModuleRequestDto } from '../../collections/modules/dto/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../collections/modules/dto/response/modules/moduleResponse.dto';

export interface IModuleApplication {
  /**
   * create module
   * @param request
   */
  create(request: ModuleRequestDto): Promise<object>;

  /**
   * getAll modules
   */
  getAll(): Promise<ModuleResponseDto[]>;

  /**
   * delete Module
   * @param request
   * @param _id
   */
  update(request: ModuleRequestDto, _id: string): Promise<ModuleResponseDto>;
}
