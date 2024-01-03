import { SessionRequestDto } from '../../../../../application/dtos/session/request/sessionRequest.dto';

export interface ISessionCreateService {
  /**
   * method create
   * @param request
   */
  create(request: SessionRequestDto): Promise<object>;
}
