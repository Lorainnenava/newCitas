import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../../infrastructure/repository/user/user.repository';
import { UserResponseDto } from '../../../../domain/entities/user/dto/response/user/userResponse.dto';
import { IUserDeleteTokenService } from '../../../../domain/interfaces/service/user/deleteToken/IUserDeleteTokenService';

@Injectable()
export class UserDeleteTokenService implements IUserDeleteTokenService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Delete token from users
   * @returns
   */
  async deleteToken(token: string): Promise<UserResponseDto> {
    try {
      const search = await this.userRepository.findOne({
        $and: [{ token: token }, { state: false }],
      });

      if (search) {
        return await this.userRepository.update(
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
