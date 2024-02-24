import { SessionResponseDto } from '../../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionGetOneService {
  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<SessionResponseDto>;
}
