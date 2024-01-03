import { ModuleResponseDto } from '../../../../../application/dtos/modules/response/modules/moduleResponse.dto';

export interface IModuleGetAllService {
  /**
   * getAll modules
   */
  getAll(): Promise<ModuleResponseDto[]>;
}
