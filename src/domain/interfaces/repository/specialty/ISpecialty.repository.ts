import { SpecialtyRequestDto } from '../../../dtos/specialty/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../dtos/specialty/response/specialtyResponse.dto';

export interface ISpecialtyRepository {
  /**
   * Create specialty
   * @param request
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;

  /**
   * getAll specialties
   */
  getAll(): Promise<SpecialtyResponseDto[]>;

  /**
   * Delete specialty
   * @param _id
   */
  delete(_id: string): Promise<SpecialtyResponseDto>;
}
