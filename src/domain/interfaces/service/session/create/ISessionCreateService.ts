import { SessionRequestDto } from '../../../../dtos/session/request/sessionRequest.dto';
import { SessionResponseDto } from '../../../../dtos/session/response/sessionResponse.dto';

export interface ISessionCreateService {
  /**
   * method create
   * @param request
   */
  create(request: SessionRequestDto): Promise<SessionResponseDto>;
}
