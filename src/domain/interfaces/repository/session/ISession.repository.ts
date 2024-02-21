import { SessionRequestDto } from '../../../entities/session/dto/request/session/sessionRequest.dto';
import { SessionResponseDto } from '../../../entities/session/dto/response/sessionResponse.dto';

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
