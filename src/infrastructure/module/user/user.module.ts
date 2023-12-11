import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import {
  User,
  userSchema,
} from '../../../domain/collections/user/schemas/user.entity';
import { PasswordService } from '../../../utils/bcrypt/bcrypt';
import { UserService } from '../../../application/user/user.service';
import { UserController } from '../../controller/user/user.controller';
import { RandomTokenService } from '../../../utils/randomToken/randomToken';
import { ConfirmationEmailService } from '../../../application/confirmationEmail/confirmationEmail.service';
import { ConfirmationEmailModule } from '../confirmationEmail/confirmationEmail.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    DoctorModule,
    ConfirmationEmailModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    PasswordService,
    RandomTokenService,
    ConfirmationEmailService,
  ],
  exports: [UserService, MongooseModule],
})
export class UserModule {}
