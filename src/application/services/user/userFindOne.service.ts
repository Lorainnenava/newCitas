import { Injectable } from '@nestjs/common';
import { UserResponseDto } from '../../dtos/user/response/user/userResponse.dto';
import { UserRepository } from '../../../infrastructure/repository/user/user.repository';
import { IUserFindOneService } from '../../../domain/interfaces/service/user/findOne/IUserFindOneService';

@Injectable()
export class UserFindOneService implements IUserFindOneService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * FindOne User
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<UserResponseDto> {
    try {
      return await this.userRepository.findOne(email);
    } catch (error) {
      throw error;
    }
  }
}
