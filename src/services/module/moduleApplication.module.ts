import { Module } from '@nestjs/common';
import { ModuleCreateService } from './create/moduleCreate.service';
import { ModuleUpdateService } from './update/moduleUpdate.service';
import { ModulesGetAllService } from './getAll/modulesGetAll.service';

/**
 * Module for importing module services.
 */
@Module({
  providers: [ModuleCreateService, ModulesGetAllService, ModuleUpdateService],
  exports: [ModuleCreateService, ModulesGetAllService, ModuleUpdateService],
})
export class ModuleApplicationModule {}
