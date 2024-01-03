import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PasswordService } from '../../../utils/bcrypt/bcrypt';
import { RandomTokenService } from '../../../utils/randomToken/randomToken';
import { User, userSchema } from '../../../domain/entities/user/user.entity';
import { ConfirmationEmailModule } from '../confirmationEmail/confirmationEmail.module';
import { UserController } from '../../../infrastructure/controller/user/user.controller';
import { UserRepository } from '../../../infrastructure/repository/user/user.repository';
import { UserSignUpService } from '../../../application/services/user/userSignUp.service';
import { UserGetAllService } from '../../../application/services/user/userGetAll.service';
import { UserFindOneService } from '../../../application/services/user/userFindOne.service';
import { UserDeleteTokenService } from '../../../application/services/user/userDeleteToken.service';
import { ConfirmationEmailService } from '../../../application/services/confirmationEmail/confirmationEmail.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    DoctorModule,
    ConfirmationEmailModule,
  ],
  controllers: [UserController],
  providers: [
    UserRepository,
    UserSignUpService,
    UserFindOneService,
    UserGetAllService,
    UserDeleteTokenService,
    PasswordService,
    RandomTokenService,
    ConfirmationEmailService,
  ],
  exports: [
    UserSignUpService,
    UserFindOneService,
    UserGetAllService,
    UserDeleteTokenService,
    MongooseModule,
  ],
})
export class UserModule {}
