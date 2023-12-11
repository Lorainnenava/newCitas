import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Session,
  SessionSchema,
} from '../../../domain/collections/session/schema/session.entity';
import { SessionService } from '../../../application/session/session.service';
import { SessionController } from '../../controller/session/session.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule { }
