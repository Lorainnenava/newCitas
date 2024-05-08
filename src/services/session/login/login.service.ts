import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from 'src/domain/entities/session/dto/request/login/loginRequest.dto';
import { ISessionRepository } from 'src/domain/interfaces/infrastructure/session/ISession.repository';
import { IUserRepository } from 'src/domain/interfaces/infrastructure/user/IUser.repository';
import { ILoginService } from 'src/domain/interfaces/services/session/login/ILoginService';
import { PasswordService } from 'src/shared/utils/bcrypt/bcrypt.service';

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
