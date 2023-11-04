import { Body, Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserApplication } from '../../domain/inferface/user/IUserApplication';
import { User } from '../../domain/collections/user/schemas/user.entity';
import { UserRequestDto } from '../../domain/collections/user/dto/request/userRequest.dto';
import { UserResponseDto } from '../../domain/collections/user/dto/response/userResponse.dto';

/**
 * Controller User
 */
@Injectable()
export class UserService implements IUserApplication {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * SignUp
   * @param userDto
   */
  async signUp(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    try {
      const exitedUser = await this.userModel.findOne({
        email: userDto.email,
      });
      if (exitedUser) throw new BadRequestException('This user already exists');
      return await new this.userModel(userDto).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * FindOne
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<UserResponseDto> {
    return await this.userModel.findOne({ email: email });
  }

  /**
   * GetAll
   * @returns
   */
  async getAll(): Promise<UserResponseDto[]> {
    return await this.userModel.find();
  }
}
