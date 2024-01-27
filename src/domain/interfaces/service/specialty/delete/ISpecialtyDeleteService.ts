import { SpecialtyResponseDto } from '../../../../dtos/specialty/response/specialtyResponse.dto';

export interface ISpecialtyDeleteService {
  /**
   * Delete Specialty
   * @param _id
   */
  delete(_id: string): Promise<SpecialtyResponseDto>;
}
