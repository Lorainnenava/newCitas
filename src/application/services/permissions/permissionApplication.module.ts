import { Module } from '@nestjs/common';
import { PermissionsCreateService } from './create/permissionsCreate.service';
import { PermissionsUpdateService } from './update/permissionsUpdate.service';
import { PermissionsGetAllByRoleService } from './getAlByRole/permissionsGetAllByRole.service';

@Module({
  providers: [
    PermissionsCreateService,
    PermissionsGetAllByRoleService,
    PermissionsUpdateService,
  ],
  exports: [
    PermissionsCreateService,
    PermissionsGetAllByRoleService,
    PermissionsUpdateService,
  ],
})
export class PermissionApplicationModule {}
