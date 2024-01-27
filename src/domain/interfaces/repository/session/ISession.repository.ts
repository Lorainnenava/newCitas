import { SessionRequestDto } from '../../../dtos/session/request/sessionRequest.dto';
import { SessionResponseDto } from '../../../dtos/session/response/sessionResponse.dto';

export interface ISessionRepository {
  /**
   * create session
   * @param request
   */
  create(request: SessionRequestDto): Promise<SessionResponseDto>;

  /**
   * delete session
   * @param token
   */
  delete(token: string): Promise<SessionResponseDto>;

  /**
   * findOne session
   * @param email
   */
  findOne(email: string): Promise<SessionResponseDto>;
}
