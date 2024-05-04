import { Module } from '@nestjs/common';
import { UserCreateService } from './create/userCreate.service';
import { UserDeleteTokenService } from './deleteToken/userDeleteToken.service';

/**
 * Module for importing user services.
 */
@Module({
  providers: [UserCreateService, UserDeleteTokenService],
  exports: [UserCreateService, UserDeleteTokenService],
})
export class UserApplicationModule {}
