import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../infrastructure/repository/user/user.repository';
import { UserResponseDto } from '../../../../domain/entities/user/dto/response/user/userResponse.dto';
import { IUserGetAllService } from '../../../../domain/interfaces/service/user/getAll/IUserGetAllService';

@Injectable()
export class UserGetAllService implements IUserGetAllService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * GetAll Users
   * @returns
   */
  async getAll(): Promise<UserResponseDto[]> {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
