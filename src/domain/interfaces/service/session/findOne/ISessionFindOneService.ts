import { SessionResponseDto } from '../../../../../application/dtos/session/response/sessionResponse.dto';

export interface ISessionFindOneService {
  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<SessionResponseDto | object>;
}
