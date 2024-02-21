import { SignInRequestDto } from "../../../entities/session/dto/request/signIn/signInRequest.dto";

export interface ISignInRepository {
  /**
   * signIn
   * @param request
   */
  signIn(request: SignInRequestDto): Promise<object>;
}
