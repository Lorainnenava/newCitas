import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from 'src/domain/entities/session/dto/request/login/loginRequest.dto';
import { SessionResponseDto } from 'src/domain/entities/session/dto/response/sessionResponse.dto';
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
      email: request?.email,
    });

    if (!searchUser) throw new NotFoundException('Usuario no encontrado');

    // Verifica si el usuario esta habilitado
    const searchUserEnabled = await this._userRepository.findOne({
      email: request?.email,
      state: true,
    });

    if (!searchUserEnabled) {
      throw new UnauthorizedException('El usuario no está inhabilitado');
    }

    const passwordCorrect = await this.passwordService.comparePassword(
      request?.password,
      searchUser?.password,
    );

    if (!passwordCorrect || !searchUser) {
      throw new UnauthorizedException('Los datos son incorrectos');
    }

    // Verifica si ya hay una sesión activa
    const exitedSession = await this._sessionRepository.findOne({
      email: request?.email,
    });

    let session: SessionResponseDto;
    let token: string;

    if (exitedSession) {
      // Actualizar el token existente
      exitedSession.token = await this.jwtService.signAsync({
        sub: searchUser?._id,
        roles: searchUser?.role,
        email: searchUser?.email,
        typeDocument: searchUser?.documentInfo?.typeDocument,
        documentNumber: searchUser?.documentInfo?.documentNumber,
      });

      token = exitedSession?.token;

      try {
        session = await this._sessionRepository.update(exitedSession?._id, {
          ...exitedSession,
        });
      } catch (error) {
        throw new Error('Error al actualizar la sesión');
      }
    } else {
      // create token
      token = await this.jwtService.signAsync({
        sub: searchUser?._id,
        roles: searchUser?.role,
        email: searchUser?.email,
        typeDocument: searchUser?.documentInfo?.typeDocument,
        documentNumber: searchUser?.documentInfo?.documentNumber,
      });

      try {
        // Crear un sesion para este usuario
        session = await this._sessionRepository.create({
          ...request,
          password: await this.passwordService.encryptPassword(
            request?.password,
          ),
          token,
          userInfo: searchUser,
        });
      } catch (error) {
        throw new Error('Error al crear la sesión');
      }
    }

    // return token
    return {
      email: session?.email,
      token,
    };
  }
}
