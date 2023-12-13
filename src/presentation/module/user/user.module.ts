import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PasswordService } from '../../../utils/bcrypt/bcrypt';
import { RandomTokenService } from '../../../utils/randomToken/randomToken';
import { User, userSchema } from '../../../domain/entities/user/user.entity';
import { UserService } from '../../../application/services/user/user.service';
import { ConfirmationEmailModule } from '../confirmationEmail/confirmationEmail.module';
import { UserController } from '../../../infrastructure/controller/user/user.controller';
import { ConfirmationEmailService } from '../../../application/services/confirmationEmail/confirmationEmail.service';

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
