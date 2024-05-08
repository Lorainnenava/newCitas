import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from 'src/domain/entities/user/dto/response/user/userResponse.dto';
import { IUserRepository } from 'src/domain/interfaces/infrastructure/user/IUser.repository';
import { IUserDeleteTokenService } from 'src/domain/interfaces/services/user/deleteToken/IUserDeleteTokenService';

@Injectable()
export class UserDeleteTokenService implements IUserDeleteTokenService {
  constructor(
    @Inject('UserRepository') private readonly _userRepository: IUserRepository,
  ) {}

  /**
   * Delete token from users
   * @returns
   */
  async deleteToken(token: string): Promise<UserResponseDto> {
    try {
      const search = await this._userRepository.findOne({
        $and: [{ token: token }, { state: false }],
      });

      if (search) {
        return await this._userRepository.update(
          { _id: search._id },
          {
            $set: {
              state: true,
              data: search,
            },
            $unset: { token: '' },
          },
        );
      }
      throw new NotFoundException('This token does not exit');
    } catch (error) {
      throw error;
    }
  }
}
