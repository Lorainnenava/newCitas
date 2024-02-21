import { ModuleResponseDto } from '../../../../entities/module/dto/response/module/moduleResponse.dto';

export interface IModulesGetAllService {
  /**
   * getAll modules
   */
  getAll(): Promise<ModuleResponseDto[]>;
}
