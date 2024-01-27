import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../infrastructure/repository/user/user.repository';
import { IUserFindOneService } from '../../../domain/interfaces/service/user/findOne/IUserFindOneService';
import { UserResponseDto } from '../../../domain/dtos/user/response/user/userResponse.dto';

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
