import { SpecialtyResponseDto } from '../../../../../application/dtos/specialty/response/specialtiesResponse.dto';

export interface ISpecialtyDeleteService {
  /**
   * Delete Specialty
   * @param _id
   */
  delete(_id: string): Promise<SpecialtyResponseDto>;
}
