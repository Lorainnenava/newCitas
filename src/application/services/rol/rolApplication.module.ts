import { Module } from '@nestjs/common';
import { RolCreateService } from './create/rolCreate.service';
import { RolesGetAllService } from './getAll/rolesGetAll.service';

/**
 * Module for importing rol services.
 */
@Module({
  providers: [RolCreateService, RolesGetAllService],
  exports: [RolCreateService, RolesGetAllService],
})
export class RolApplicationModule {}
