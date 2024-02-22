import { Module } from '@nestjs/common';
import { ModuleCreateService } from './create/moduleCreate.service';
import { ModulesGetAllService } from './getAll/modulesGetAll.service';
import { ModuleUpdateService } from './update/moduleUpdate.service';

@Module({
  providers: [ModuleCreateService, ModulesGetAllService, ModuleUpdateService],
  exports: [ModuleCreateService, ModulesGetAllService, ModuleUpdateService],
})
export class ModuleApplicationModule {}
