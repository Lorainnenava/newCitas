import { SessionResponseDto } from '../../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionFindOneService {
  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<SessionResponseDto>;
}
