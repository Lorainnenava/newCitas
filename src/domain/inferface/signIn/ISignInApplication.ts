import { SignInRequestDto } from 'src/domain/collections/signIn/dto/signIn.dto';

export interface ISignInApplication {
  signIn(data: SignInRequestDto): Promise<object>;
}
