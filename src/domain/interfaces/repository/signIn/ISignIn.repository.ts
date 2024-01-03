import { SignInRequestDto } from '../../../../application/dtos/signIn/request/signIn.dto';

export interface ISignInRepository {
  /**
   * method signIn
   * @param request
   */
  signIn(request: SignInRequestDto): Promise<object>;
}
