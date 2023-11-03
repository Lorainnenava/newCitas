import {
  Body,
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SessionService } from '../session/session.service';
import { comparePassword } from 'src/utils';
import { ISignInApplication } from 'src/domain/inferface/signIn/ISignInApplication';
import { SignInRequestDto } from 'src/domain/collections/signIn/dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService implements ISignInApplication {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(@Body() data: SignInRequestDto): Promise<object> {
    const searchUser = await this.userService.findOne(data.email);
    if (!searchUser) throw new NotFoundException('User not found');

    const passwordCorrect = await comparePassword(
      data.password,
      searchUser.password,
    );
    if (!passwordCorrect || !searchUser) {
      throw new UnauthorizedException('Wrong data');
    }

    /**
     * verify if the session exists
     */
    const exitedSession = await this.sessionService.findOne(searchUser._id);
    if (exitedSession)
      throw new BadRequestException('This session already exists');
    const accessToken = await this.jwtService.signAsync({
      name: searchUser.name,
      sub: searchUser._id,
    });
    const newSession = await this.sessionService.create({
      email: data.email,
      password: data.password,
      role: searchUser.role,
      token: accessToken,
      _idUser: searchUser._id,
    });
    return {
      newSession,
      msg: 'You have successfully logged in',
      token: accessToken,
    };
  }
}
