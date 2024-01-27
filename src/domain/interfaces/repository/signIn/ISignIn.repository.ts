import { SignInRequestDto } from '../../../dtos/signIn/request/signIn.dto';

export interface ISignInRepository {
  /**
   * signIn
   * @param request
   */
  signIn(request: SignInRequestDto): Promise<object>;
}
