import { Module } from '@nestjs/common';
import { SessionController } from 'src/infrastructure/controller/session/session.controller';
import { SessionService } from 'src/application/session/session.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Session,
  SessionSchema,
} from 'src/domain/collections/session/schema/session.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
