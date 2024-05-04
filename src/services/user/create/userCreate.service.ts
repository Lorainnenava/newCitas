import { Injectable, ConflictException, Inject } from '@nestjs/common';
import { PasswordService } from '../../../../utils/bcrypt/bcrypt.service';
import { RandomTokenService } from '../../../../utils/randomToken/randomToken.service';
import { IUserRepository } from '../../../../domain/interfaces/repository/user/IUser.repository';
import { UserRequestDto } from '../../../../domain/entities/user/dto/request/user/userRequest.dto';
import { ConfirmationEmailService } from '../../emails/confirmationEmail/confirmationEmail.service';
import { UserResponseDto } from '../../../../domain/entities/user/dto/response/user/userResponse.dto';
import { IDoctorRepository } from '../../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { IUserCreateService } from '../../../../domain/interfaces/service/user/create/IUserCreateService';

@Injectable()
export class UserCreateService implements IUserCreateService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: IUserRepository,
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
    private readonly passwordService: PasswordService,
    private readonly randomTokenService: RandomTokenService,
    private readonly confirmationEmailService: ConfirmationEmailService,
  ) {}

  /**
   * Create
   * @param request
   */
  async create(request: UserRequestDto): Promise<UserResponseDto> {
    try {
      // verify if the user exists
      const exitedUser = await this._userRepository.findOne({
        $and: [{ email: request.email }, { state: true }],
      });

      if (exitedUser) throw new ConflictException('This user already exists');

      // verify is the user is a doctor
      const isDoctor = (await this._doctorRepository.findOne({
        'documentInfo.documentNumber': Number(
          request.documentInfo.documentNumber,
        ),
      }))
        ? 'DOCTOR'
        : 'PACIENTE';

      // create user
      const createUser = await this._userRepository.create({
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
