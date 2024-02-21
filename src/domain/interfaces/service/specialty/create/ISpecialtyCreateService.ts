import { SpecialtyRequestDto } from '../../../../entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../../entities/specialty/dto/response/specialtyResponse.dto';

export interface ISpecialtyCreateService {
  /**
   * Create Specialty
   * @param request
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;
}
