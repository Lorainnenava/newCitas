import { SessionRequestDto } from '../../../../application/dtos/session/request/sessionRequest.dto';
import { SessionResponseDto } from '../../../../application/dtos/session/response/sessionResponse.dto';

export interface ISessionApplication {
  /**
   * method create
   * @param request
   */
  create(request: SessionRequestDto): Promise<object>;

  /**
   * method delete
   * @param token
   */
  delete?(token: string): Promise<SessionResponseDto>;

  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<SessionResponseDto>;

  /**
   * method findSession
   * @param email
   */
  findSession(email: string): Promise<SessionResponseDto | object>;
}
