import { Body, Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserApplication } from '../../domain/inferface/user/IUserApplication';
import { User } from '../../domain/collections/user/schemas/user.entity';
import { UserRequestDto } from '../../domain/collections/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../domain/collections/user/dto/response/user/userResponse.dto';
import { encryptPassword } from '../../utils';

/**
 * UserService
 */
@Injectable()
export class UserService implements IUserApplication {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * SignUp
   * @param request
   */
  async signUp(@Body() request: UserRequestDto): Promise<UserResponseDto> {
    try {
      const exitedUser = await this.userModel.findOne({
        email: request.email,
      });
      if (exitedUser) throw new BadRequestException('This user already exists');
      return await new this.userModel({
        ...request,
        password: await encryptPassword(request.password),
      }).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * FindOne User
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<UserResponseDto> {
    try {
      return await this.userModel.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  }

  /**
   * GetAll Users
   * @returns
   */
  async getAll(): Promise<UserResponseDto[]> {
    try {
      const getAllUsers = await this.userModel.find();
      if (!getAllUsers) {
        return [];
      }
      return getAllUsers;
    } catch (error) {
      throw error;
    }
  }
}
