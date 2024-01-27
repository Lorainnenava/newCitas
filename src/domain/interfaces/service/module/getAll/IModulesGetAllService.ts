import { ModuleResponseDto } from '../../../../dtos/module/response/module/moduleResponse.dto';

export interface IModulesGetAllService {
  /**
   * getAll modules
   */
  getAll(): Promise<ModuleResponseDto[]>;
}
