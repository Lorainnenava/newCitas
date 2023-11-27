import {
  Body,
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from '../../utils';
import { UserService } from '../user/user.service';
import { SessionService } from '../session/session.service';
import { SignInRequestDto } from '../../domain/collections/signIn/dto/request/signIn.dto';
import { ISignInApplication } from '../../domain/inferface/signIn/ISignInApplication';

/**
 * SignInService
 */
@Injectable()
export class SignInService implements ISignInApplication {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * signIn
   * @param request
   * @returns
   */
  async signIn(@Body() request: SignInRequestDto): Promise<object> {
    const searchUser = await this.userService.findOne(request.email);
    if (!searchUser) throw new NotFoundException('User not found');

    const passwordCorrect = await comparePassword(
      request.password,
      searchUser.password,
    );
    if (!passwordCorrect || !searchUser) {
      throw new UnauthorizedException('Wrong data');
    }

    /**
     * verify if the session exists
     */
    const exitedSession = await this.sessionService.findOne(request.email);
    if (exitedSession)
      throw new ConflictException('This session already exists');
    const accessToken = await this.jwtService.signAsync({
      sub: searchUser._id,
      name: searchUser.name,
      email: searchUser.email,
      typeDocument: searchUser.documentInfo.typeDocument,
      documentNumber: searchUser.documentInfo.documentNumber,
    });
    await this.sessionService.create({
      ...request,
      token: accessToken,
      userInfo: searchUser,
    });
    return {
      access_token: accessToken,
    };
  }
}
