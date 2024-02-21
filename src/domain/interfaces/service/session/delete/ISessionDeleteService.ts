import { SessionResponseDto } from '../../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionDeleteService {
  /**
   * method delete
   * @param token
   */
  delete(token: string): Promise<SessionResponseDto>;
}
