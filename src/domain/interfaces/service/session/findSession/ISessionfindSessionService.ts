import { SessionResponseDto } from '../../../../../application/dtos/session/response/sessionResponse.dto';

export interface ISessionFindSessionService {
  /**
   * method findSession
   * @param email
   */
  findSession(email: string): Promise<SessionResponseDto | object>;
}
