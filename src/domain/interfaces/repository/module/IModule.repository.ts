import { ModuleRequestDto } from '../../../dtos/module/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../dtos/module/response/module/moduleResponse.dto';

export interface IModuleRepository {
  /**
   * create module
   * @param request
   */
  create(request: ModuleRequestDto): Promise<ModuleResponseDto>;

  /**
   * getAll modules
   */
  getAll(): Promise<ModuleResponseDto[]>;

  /**
   * findOne module
   * @param name
   */
  findOne(name: string): Promise<ModuleResponseDto>;

  /**
   * update module
   * @param request
   */
  update(request: ModuleRequestDto): Promise<ModuleResponseDto>;
}
