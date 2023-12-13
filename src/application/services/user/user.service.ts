import {
  Body,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { DoctorService } from './../doctor/doctor.service';
import { PasswordService } from '../../../utils/bcrypt/bcrypt';
import { User } from '../../../domain/entities/user/user.entity';
import { RandomTokenService } from '../../../utils/randomToken/randomToken';
import { UserRequestDto } from '../../dtos/user/request/user/userRequest.dto';
import { UserResponseDto } from '../../dtos/user/response/user/userResponse.dto';
import { ConfirmationEmailService } from '../confirmationEmail/confirmationEmail.service';
import { IUserApplication } from '../../../domain/interfaces/service/user/IUserApplication';

/**
 * UserService
 */
@Injectable()
export class UserService implements IUserApplication {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly doctorService: DoctorService,
    private readonly passwordService: PasswordService,
    private readonly randomTokenService: RandomTokenService,
    private readonly confirmationEmailService: ConfirmationEmailService,
  ) {}

  /**
   * SignUp
   * @param request
   */
  async signUp(@Body() request: UserRequestDto): Promise<UserResponseDto> {
    try {
      // verify if the user exists
      const exitedUser = await this.userModel.findOne({
        email: request.email,
      });

      if (exitedUser) throw new ConflictException('This user already exists');

      // verify is the user is a doctor
      const isDoctor = (await this.doctorService.findOne(
        request.documentInfo.documentNumber,
      ))
        ? 'DOCTOR'
        : 'PACIENTE';

      // create user
      const createUser = await new this.userModel({
        ...request,
        password: await this.passwordService.encryptPassword(request.password),
        role: request.role ? request.role : isDoctor,
        token: await this.randomTokenService.generarToken(),
      }).save();

      // if the user was created so you must send a email of verification
      if (createUser) {
        await this.confirmationEmailService.sendConfirmationEmail(
          createUser.token,
          createUser.email,
          createUser.firstName,
        );
      }

      return createUser;
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
      return await this.userModel.findOne({
        $and: [{ email: email }, { state: true }],
      });
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

  /**
   * Delete token from users
   * @returns
   */
  async deleteToken(
    token: string,
  ): Promise<NotFoundException | UpdateWriteOpResult> {
    try {
      const search = await this.userModel.findOne({ token });
      if (search) {
        const result = await this.userModel.updateOne(
          { _id: search._id },
          {
            $set: {
              state: true,
              data: search,
            },
            $unset: { token: '' },
          },
        );
        return result;
      }
      throw new NotFoundException('This token does not exit');
    } catch (error) {
      throw error;
    }
  }
}
