import {
  Body,
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../../../utils/bcrypt/bcrypt';
import { UserFindOneService } from '../user/userFindOne.service';
import { SessionCreateService } from '../session/sessionCreate.service';
import { SignInRequestDto } from '../../dtos/signIn/request/signIn.dto';
import { SessionFindOneService } from '../session/sessionFindOne.service';
import { ISignInService } from '../../../domain/interfaces/service/signIn/ISignInService';

@Injectable()
export class SignInService implements ISignInService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly userFindOneService: UserFindOneService,
    private readonly sessionCreateService: SessionCreateService,
    private readonly sessionFindOneService: SessionFindOneService,
  ) {}

  /**
   * signIn
   * @param request
   * @returns
   */
  async signIn(@Body() request: SignInRequestDto): Promise<object> {
    const searchUser = await this.userFindOneService.findOne(request.email);

    if (!searchUser) throw new NotFoundException('User not found');

    const passwordCorrect = await this.passwordService.comparePassword(
      request.password,
      searchUser.password,
    );

    if (!passwordCorrect || !searchUser) {
      throw new UnauthorizedException('Wrong data');
    }

    // verify if the session exists
    const exitedSession = await this.sessionFindOneService.findOne(
      request.email,
    );
    if (exitedSession)
      throw new ConflictException('This session already exists');

    // create token
    const accessToken = await this.jwtService.signAsync({
      sub: searchUser._id,
      roles: searchUser.role,
      email: searchUser.email,
      name: searchUser.firstName,
      typeDocument: searchUser.documentInfo.typeDocument,
      documentNumber: searchUser.documentInfo.documentNumber,
    });

    // create session
    const createSession = await this.sessionCreateService.create({
      ...request,
      token: accessToken,
      userInfo: searchUser,
    });

    // return token
    return {
      name: createSession.userInfo.firstName,
      email: createSession.email,
      token: accessToken,
    };
  }
}
