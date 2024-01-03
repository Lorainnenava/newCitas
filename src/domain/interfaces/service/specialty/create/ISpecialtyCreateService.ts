import { SpecialtyRequestDto } from '../../../../../application/dtos/specialty/request/specialtiesRequest.dto';
import { SpecialtyResponseDto } from '../../../../../application/dtos/specialty/response/specialtiesResponse.dto';

export interface ISpecialtyCreateService {
  /**
   * Create Specialty
   * @param request
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;
}
