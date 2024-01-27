import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Session,
  SessionSchema,
} from '../../../domain/entities/session/session.entity';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { SessionCreateService } from '../../../application/services/session/sessionCreate.service';
import { SessionDeleteService } from '../../../application/services/session/sessionDelete.service';
import { SessionFindOneService } from '../../../application/services/session/sessionFindOne.service';
import { SessionFindSessionService } from '../../../application/services/session/sessionFindSession.service';
import { SessionController } from '../../controller/session/session.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  controllers: [SessionController],
  providers: [
    SessionRepository,
    SessionCreateService,
    SessionDeleteService,
    SessionFindOneService,
    SessionFindSessionService,
  ],
  exports: [
    SessionDeleteService,
    SessionCreateService,
    SessionFindOneService,
    SessionFindSessionService,
  ],
})
export class SessionModule {}
