import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, UpdateWriteOpResult } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../../domain/entities/user/user.entity';
import { IUserRepository } from '../../../domain/interfaces/repository/user/IUser.repository';
import { UserRequestDto } from '../../../domain/entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/entities/user/dto/response/user/userResponse.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * SignUp
   * @param request
   */
  async signUp(request: UserRequestDto): Promise<UserResponseDto> {
    try {
      return await new this.userModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * FindOne User
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<UserResponseDto> {
    try {
      return await this.userModel.findOne({
        $and: [{ email: email }, { state: true }],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOneByToken User
   * @param token
   * @returns
   */
  async findOneByToken(token: string): Promise<UserResponseDto> {
    try {
      return await this.userModel.findOne({
        $and: [{ token: token }, { state: false }],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * GetAll Users
   * @returns
   */
  async getAll(): Promise<UserResponseDto[]> {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById User
   * @returns
   */
  async findById(_id: string): Promise<UserResponseDto> {
    try {
      return await this.userModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Delete token from users
   * @returns
   */
  async deleteToken(
    data: UserRequestDto,
    _id: mongoose.Types.ObjectId,
  ): Promise<NotFoundException | UpdateWriteOpResult> {
    try {
      return await this.userModel.updateOne(
        { _id: _id },
        {
          $set: {
            state: true,
            data: data,
          },
          $unset: { token: '' },
        },
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
