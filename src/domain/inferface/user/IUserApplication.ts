import { UpdateWriteOpResult } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { UserRequestDto } from '../../collections/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../collections/user/dto/response/user/userResponse.dto';

export interface IUserApplication {
  /**
   * method signUp
   * @param request
   */
  signUp(request: UserRequestDto): Promise<UserResponseDto>;

  /**
   * method findOne
   * @param email
   */
  findOne?(email: string): Promise<UserResponseDto>;

  /**
   * method findById
   * @param _id
   */
  findById?(_id: string): Promise<UserResponseDto>;

  /**
   * method getAll
   */
  getAll?(): Promise<UserResponseDto[]>;

  /**
   * method deleteToken
   */
  deleteToken?(token: string): Promise<NotFoundException | UpdateWriteOpResult>;
}
