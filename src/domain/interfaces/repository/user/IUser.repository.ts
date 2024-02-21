import mongoose, { UpdateWriteOpResult } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { UserRequestDto } from '../../../entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserRepository {
  /**
   * signUp
   * @param request
   */
  signUp(request: UserRequestDto): Promise<UserResponseDto>;

  /**
   * findOne
   * @param email
   */
  findOne(email: string): Promise<UserResponseDto>;

  /**
   * findById
   * @param _id
   */
  findById(_id: string): Promise<UserResponseDto>;

  /**
   * getAll users
   */
  getAll(): Promise<UserResponseDto[]>;

  /**
   * deleteToken of user
   */
  deleteToken(
    data: UserRequestDto,
    _id: mongoose.Types.ObjectId,
  ): Promise<NotFoundException | UpdateWriteOpResult>;
}
