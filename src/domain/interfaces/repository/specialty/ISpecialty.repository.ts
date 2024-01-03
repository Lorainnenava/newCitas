import { SpecialtyRequestDto } from '../../../../application/dtos/specialty/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../../../application/dtos/specialty/response/specialtiesResponse.dto';

export interface ISpecialtyRepository {
  /**
   * Create Specialty
   * @param request
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;

  /**
   * getAll Specialty
   */
  getAll(): Promise<SpecialtyResponseDto[]>;

  /**
   * Delete Specialty
   * @param _id
   */
  delete(_id: string): Promise<SpecialtyResponseDto>;
}
