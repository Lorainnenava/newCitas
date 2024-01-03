import mongoose, { UpdateWriteOpResult } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { UserRequestDto } from '../../../../application/dtos/user/request/user/userRequest.dto';
import { UserResponseDto } from '../../../../application/dtos/user/response/user/userResponse.dto';

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
   * getAll
   */
  getAll(): Promise<UserResponseDto[]>;

  /**
   * deleteToken
   */
  deleteToken(
    data: UserRequestDto,
    _id: mongoose.Types.ObjectId,
  ): Promise<NotFoundException | UpdateWriteOpResult>;
}
