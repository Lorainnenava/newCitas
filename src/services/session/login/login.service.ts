import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../../../../utils/bcrypt/bcrypt.service';
import { IUserRepository } from '../../../../domain/interfaces/repository/user/IUser.repository';
import { ILoginService } from '../../../../domain/interfaces/service/session/login/ILoginService';
import { LoginRequestDto } from '../../../../domain/entities/session/dto/request/Login/LoginRequest.dto';
import { ISessionRepository } from '../../../../domain/interfaces/repository/session/ISession.repository';

@Injectable()
export class LoginService implements ILoginService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: IUserRepository,
    @Inject('SessionRepository')
    private readonly _sessionRepository: ISessionRepository,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   * Login
   * @param request
   * @returns
   */
  async login(request: LoginRequestDto): Promise<object> {
    const searchUser = await this._userRepository.findOne({
      email: request.email,
    });

    if (!searchUser) throw new NotFoundException('User not found');

    const passwordCorrect = await this.passwordService.comparePassword(
      request.password,
      searchUser.password,
    );

    if (!passwordCorrect || !searchUser) {
      throw new UnauthorizedException('Wrong data');
    }

    // verify if the session exists
    const exitedSession = await this._sessionRepository.findOne({
      email: request.email,
    });
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
    const createSession = await this._sessionRepository.create({
      ...request,
      password: await this.passwordService.encryptPassword(request.password),
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
