import { ModuleRequestDto } from '../../../../application/dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../../../application/dtos/modules/response/modules/moduleResponse.dto';

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
   * findOne
   * @param name 
   */
  findOne(name: string): Promise<ModuleResponseDto>

  /**
   * delete Module
   * @param request
   * @param _id
   */
  update(request: ModuleRequestDto, _id: string): Promise<ModuleResponseDto>;
}
