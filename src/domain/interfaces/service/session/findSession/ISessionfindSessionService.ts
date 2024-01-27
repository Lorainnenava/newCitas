import { SessionResponseDto } from '../../../../dtos/session/response/sessionResponse.dto';

export interface ISessionFindSessionService {
  /**
   * method findSession
   * @param email
   */
  findSession(email: string): Promise<SessionResponseDto>;
}
