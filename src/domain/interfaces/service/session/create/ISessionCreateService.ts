import { SessionRequestDto } from '../../../../entities/session/dto/request/session/sessionRequest.dto';
import { SessionResponseDto } from '../../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionCreateService {
  /**
   * method create
   * @param request
   */
  create(request: SessionRequestDto): Promise<SessionResponseDto>;
}
