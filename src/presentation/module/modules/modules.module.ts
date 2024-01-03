import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Modules,
  ModuleSchema,
} from '../../../domain/entities/modules/module.entity';
import { ModuleController } from '../../../infrastructure/controller/modules/modules.controller';
import { ModuleCreateService } from '../../../application/services/modules/modulesCreate.service';
import { ModuleGetAllService } from '../../../application/services/modules/modulesGetAll.service';
import { ModuleUpdateService } from '../../../application/services/modules/modulesUpdate.service';
import { ModuleRepository } from './../../../infrastructure/repository/modules/modules.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modules.name, schema: ModuleSchema }]),
  ],
  providers: [
    ModuleRepository,
    ModuleCreateService,
    ModuleGetAllService,
    ModuleUpdateService,
  ],
  exports: [ModuleCreateService, ModuleGetAllService, ModuleUpdateService],
  controllers: [ModuleController],
})
export class ModulesModule {}
