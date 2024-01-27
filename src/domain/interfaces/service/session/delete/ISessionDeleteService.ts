import { SessionResponseDto } from '../../../../dtos/session/response/sessionResponse.dto';

export interface ISessionDeleteService {
  /**
   * method delete
   * @param token
   */
  delete(token: string): Promise<SessionResponseDto>;
}
