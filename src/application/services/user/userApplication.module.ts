import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordService } from '../../../utils/bcrypt/bcrypt.service';
import { RandomTokenService } from '../../../utils/randomToken/randomToken.service';
import { UserCreateService } from './create/userCreate.service';
import { UserGetAllService } from './getAll/userGetAll.service';
import { UserDeleteTokenService } from './deleteToken/userDeleteToken.service';
import { ConfirmationEmailService } from '../confirmationEmail/confirmationEmail.service';

@Module({
  providers: [
    UserCreateService,
    UserGetAllService,
    UserDeleteTokenService,
    PasswordService,
    RandomTokenService,
    ConfirmationEmailService,
  ],
  exports: [
    UserCreateService,
    UserGetAllService,
    UserDeleteTokenService,
    MongooseModule,
  ],
})
export class UserApplicationModule {}
