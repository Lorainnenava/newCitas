import { Body, Injectable, ConflictException } from '@nestjs/common';
import { PasswordService } from '../../../utils/bcrypt/bcrypt.service';
import { DoctorFindOneService } from '../doctor/doctorFindOne.service';
import { RandomTokenService } from '../../../utils/randomToken/randomToken.service';
import { UserRepository } from '../../../infrastructure/repository/user/user.repository';
import { ConfirmationEmailService } from '../confirmationEmail/confirmationEmail.service';
import { IUserSignUpService } from '../../../domain/interfaces/service/user/signUp/IUserService';
import { UserRequestDto } from '../../../domain/dtos/user/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/dtos/user/response/user/userResponse.dto';

@Injectable()
export class UserSignUpService implements IUserSignUpService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly randomTokenService: RandomTokenService,
    private readonly doctorFindOneService: DoctorFindOneService,
    private readonly confirmationEmailService: ConfirmationEmailService,
  ) {}

  /**
   * SignUp
   * @param request
   */
  async signUp(@Body() request: UserRequestDto): Promise<UserResponseDto> {
    try {
      // verify if the user exists
      const exitedUser = await this.userRepository.findOne(request.email);

      if (exitedUser) throw new ConflictException('This user already exists');

      // verify is the user is a doctor
      const isDoctor = (await this.doctorFindOneService.findOne(
        request.documentInfo.documentNumber,
      ))
        ? 'DOCTOR'
        : 'PACIENTE';

      // create user
      const createUser = await this.userRepository.signUp({
        ...request,
        password: await this.passwordService.encryptPassword(request.password),
        role: request.role ? request.role : isDoctor,
        token: await this.randomTokenService.generarToken(),
      });

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
}
