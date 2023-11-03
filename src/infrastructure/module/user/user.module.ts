import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserController } from 'src/infrastructure/controller/user/user.controller';
import { UserService } from 'src/application/user/user.service';
import {
  User,
  userSchema,
} from 'src/domain/collections/user/schemas/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
