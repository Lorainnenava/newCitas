import { ModuleRequestDto } from '../../../entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../entities/module/dto/response/module/moduleResponse.dto';

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
