import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserRequestDto } from 'src/domain/entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from 'src/domain/entities/user/dto/response/user/userResponse.dto';
import { IUserRepository } from 'src/domain/interfaces/infrastructure/user/IUser.repository';
import { IUserCreateService } from 'src/domain/interfaces/services/user/create/IUserCreateService';

@Injectable()
export class UserCreateService implements IUserCreateService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: IUserRepository,
  ) {}

  /**
   * Crear usuario
   * @param request
   */
  async create(request: UserRequestDto): Promise<UserResponseDto> {
    try {
      // Verifica si este usuario existe
      const exitedUser = await this._userRepository.findOne({
        $or: [
          { email: request?.email },
          {
            'documentInfo.documentNumber': Number(
              request?.documentInfo?.documentNumber,
            ),
          },
        ],
      });

      if (exitedUser) throw new ConflictException('Este usuario ya existe');

      // Crea un usuario
      const createUser = await this._userRepository.create(request);

      return createUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
