import { Injectable, ConflictException } from '@nestjs/common';
import { PasswordService } from '../../../../utils/bcrypt/bcrypt.service';
import { DoctorFindOneService } from '../../doctor/findOne/doctorFindOne.service';
import { RandomTokenService } from '../../../../utils/randomToken/randomToken.service';
import { UserRepository } from '../../../../infrastructure/repository/user/user.repository';
import { ConfirmationEmailService } from '../../confirmationEmail/confirmationEmail.service';
import { UserRequestDto } from '../../../../domain/entities/user/dto/request/user/userRequest.dto';
import { IUserCreateService } from '../../../../domain/interfaces/service/user/create/IUserService';
import { UserResponseDto } from '../../../../domain/entities/user/dto/response/user/userResponse.dto';

@Injectable()
export class UserCreateService implements IUserCreateService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly randomTokenService: RandomTokenService,
    private readonly doctorFindOneService: DoctorFindOneService,
    private readonly confirmationEmailService: ConfirmationEmailService,
  ) {}

  /**
   * Create
   * @param request
   */
  async create(request: UserRequestDto): Promise<UserResponseDto> {
    try {
      // verify if the user exists
      const exitedUser = await this.userRepository.findOne({
        $and: [{ email: request.email }, { state: true }],
      });

      if (exitedUser) throw new ConflictException('This user already exists');

      // verify is the user is a doctor
      const isDoctor = (await this.doctorFindOneService.findOne(
        request.documentInfo.documentNumber,
      ))
        ? 'DOCTOR'
        : 'PACIENTE';

      // create user
      const createUser = await this.userRepository.create({
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
