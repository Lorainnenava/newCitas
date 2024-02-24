import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { SessionGetOneService } from './getOne/sessionFind.service';

/**
 * Module for importing session services.
 */
@Module({
  providers: [LoginService, SessionGetOneService],
  exports: [LoginService, SessionGetOneService],
})
export class SessionApplicationModule {}
