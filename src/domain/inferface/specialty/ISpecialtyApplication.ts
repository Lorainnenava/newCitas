import { SpecialtyRequestDto } from '../../collections/specialty/dto/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../collections/specialty/dto/response/specialtiesResponse.dto';

export interface ISpecialtyApplication {
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
