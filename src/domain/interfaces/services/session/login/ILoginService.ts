import { LoginRequestDto } from '../../../../entities/session/dto/request/login/loginRequest.dto';

export interface ILoginService {
  /**
   * method Login
   * @param request
   */
  login(request: LoginRequestDto): Promise<object>;
}
