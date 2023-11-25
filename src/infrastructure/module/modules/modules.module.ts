import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleService } from '../../../application/modules/modules.service';
import { ModuleController } from '../../controller/modules/modules.controller';
import {
  ModuleSchema,
  Modules,
} from '../../../domain/collections/modules/schema/module.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modules.name, schema: ModuleSchema }]),
  ],
  providers: [ModuleService],
  exports: [ModuleService],
  controllers: [ModuleController],
})
export class ModulesModule {}
