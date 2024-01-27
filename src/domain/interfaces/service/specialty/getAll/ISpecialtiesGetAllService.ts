import { SpecialtyResponseDto } from '../../../../dtos/specialty/response/specialtyResponse.dto';

export interface ISpecialtiesGetAllService {
  /**
   * getAll Specialty
   */
  getAll(): Promise<SpecialtyResponseDto[]>;
}
