import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import {
  User,
  userSchema,
} from '../../../domain/collections/user/schemas/user.entity';
import { UserService } from '../../../application/user/user.service';
import { UserController } from '../../controller/user/user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
