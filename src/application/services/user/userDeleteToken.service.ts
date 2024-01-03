import { UpdateWriteOpResult } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../infrastructure/repository/user/user.repository';
import { IUserDeleteTokenService } from '../../../domain/interfaces/service/user/deleteToken/IUserDeleteTokenService';

@Injectable()
export class UserDeleteTokenService implements IUserDeleteTokenService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Delete token from users
   * @returns
   */
  async deleteToken(
    token: string,
  ): Promise<NotFoundException | UpdateWriteOpResult> {
    try {
      const search = await this.userRepository.findOneByToken(token);
      if (search) {
        return await this.userRepository.deleteToken(search, search._id);
      }
      throw new NotFoundException('This token does not exit');
    } catch (error) {
      throw error;
    }
  }
}
