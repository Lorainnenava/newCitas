import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from '../../../../domain/interfaces/repository/user/IUser.repository';
import { UserResponseDto } from '../../../../domain/entities/user/dto/response/user/userResponse.dto';
import { IUserDeleteTokenService } from '../../../../domain/interfaces/service/user/deleteToken/IUserDeleteTokenService';

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
