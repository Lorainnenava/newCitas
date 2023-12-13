import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Modules,
  ModuleSchema,
} from '../../../domain/entities/modules/module.entity';
import { ModuleService } from '../../../application/services/modules/modules.service';
import { ModuleController } from '../../../infrastructure/controller/modules/modules.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modules.name, schema: ModuleSchema }]),
  ],
  providers: [ModuleService],
  exports: [ModuleService],
  controllers: [ModuleController],
})
export class ModulesModule {}
