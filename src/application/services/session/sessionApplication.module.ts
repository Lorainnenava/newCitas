import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { SessionGetOneService } from './getOne/sessionFind.service';
import { SessionDeleteService } from './delete/sessionDelete.service';

/**
 * Module for importing session services.
 */
@Module({
  providers: [LoginService, SessionGetOneService, SessionDeleteService],
  exports: [LoginService, SessionGetOneService, SessionDeleteService],
})
export class SessionApplicationModule {}
