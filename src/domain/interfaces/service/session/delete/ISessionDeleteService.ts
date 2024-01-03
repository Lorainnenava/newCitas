import { SessionResponseDto } from '../../../../../application/dtos/session/response/sessionResponse.dto';

export interface ISessionDeleteService {
  /**
   * method delete
   * @param token
   */
  delete(token: string): Promise<SessionResponseDto>;
}
