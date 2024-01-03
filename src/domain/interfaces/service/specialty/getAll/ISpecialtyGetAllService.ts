import { SpecialtyResponseDto } from '../../../../../application/dtos/specialty/response/specialtiesResponse.dto';

export interface ISpecialtyGetAllService {
  /**
   * getAll Specialty
   */
  getAll(): Promise<SpecialtyResponseDto[]>;
}
