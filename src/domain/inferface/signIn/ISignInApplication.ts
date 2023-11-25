import { SignInRequestDto } from '../../collections/signIn/dto/request/signIn.dto';

export interface ISignInApplication {
  /**
   * method signIn
   * @param request
   */
  signIn(request: SignInRequestDto): Promise<object>;
}
