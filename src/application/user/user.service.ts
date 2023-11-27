import { Model } from 'mongoose';
import { encryptPassword } from '../../utils';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Injectable, ConflictException } from '@nestjs/common';
import { User } from '../../domain/collections/user/schemas/user.entity';
import { IUserApplication } from '../../domain/inferface/user/IUserApplication';
import { UserRequestDto } from '../../domain/collections/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../domain/collections/user/dto/response/user/userResponse.dto';

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
      if (exitedUser) throw new ConflictException('This user already exists');
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
      return await this.userModel.find();
    } catch (error) {
      throw error;
    }
  }
}
