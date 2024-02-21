import { SessionResponseDto } from '../../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionFindSessionService {
  /**
   * method findSession
   * @param email
   */
  findSession(email: string): Promise<SessionResponseDto>;
}
