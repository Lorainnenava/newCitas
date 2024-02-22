import { Module } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { ApplicationModule } from '../../application/application.module';

@Module({
  imports: [ControllerModule, ApplicationModule],
})
export class PresentationModule {}
