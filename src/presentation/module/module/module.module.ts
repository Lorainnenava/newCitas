import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ModuleSchema,
  Modules,
} from '../../../domain/entities/module/module.entity';
import { ModuleRepository } from '../../../infrastructure/repository/module/module.repository';
import { ModuleCreateService } from '../../../application/services/module/moduleCreate.service';
import { ModulesGetAllService } from '../../../application/services/module/modulesGetAll.service';
import { ModuleUpdateService } from '../../../application/services/module/moduleUpdate.service';
import { ModuleController } from '../../controller/module/module.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modules.name, schema: ModuleSchema }]),
  ],
  providers: [
    ModuleRepository,
    ModuleCreateService,
    ModulesGetAllService,
    ModuleUpdateService,
  ],
  exports: [ModuleCreateService, ModulesGetAllService, ModuleUpdateService],
  controllers: [ModuleController],
})
export class ModuleModule {}
