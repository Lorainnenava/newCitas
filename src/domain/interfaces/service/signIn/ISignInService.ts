import { SignInRequestDto } from '../../../dtos/signIn/request/signIn.dto';

export interface ISignInService {
  /**
   * method signIn
   * @param request
   */
  signIn(request: SignInRequestDto): Promise<object>;
}
