import { SignInRequestDto } from '../../collections/signIn/dto/signIn.dto';

export interface ISignInApplication {
  /**
   * method signIn
   * @param data
   */
  signIn(data: SignInRequestDto): Promise<object>;
}
