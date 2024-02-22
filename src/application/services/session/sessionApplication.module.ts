import { Module } from '@nestjs/common';
import { SessionFindSessionService } from './find/sessionFind.service';
import { LoginService } from './login/login.service';

@Module({
  providers: [LoginService, SessionFindSessionService],
  exports: [LoginService, SessionFindSessionService],
})
export class SessionApplicationModule {}
