import { SpecialtyRequestDto } from '../../../../dtos/specialty/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../../dtos/specialty/response/specialtyResponse.dto';

export interface ISpecialtyCreateService {
  /**
   * Create Specialty
   * @param request
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;
}
