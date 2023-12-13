import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Session,
  SessionSchema,
} from '../../../domain/entities/session/session.entity';
import { SessionService } from '../../../application/services/session/session.service';
import { SessionController } from '../../../infrastructure/controller/session/session.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
