import { SpecialtyResponseDto } from '../../../../entities/specialty/dto/response/specialtyResponse.dto';

export interface ISpecialtiesGetAllService {
  /**
   * getAll Specialty
   */
  getAll(): Promise<SpecialtyResponseDto[]>;
}
