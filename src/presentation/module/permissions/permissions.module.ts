import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Permissions,
  PermissionsSchema,
} from '../../../domain/entities/permissions/permissions.entity';
import { PermissionController } from '../../../infrastructure/controller/permissions/permission.controller';
import { PermissionRepository } from '../../../infrastructure/repository/permissions/permissions.repository';
import { PermissionCreateService } from '../../../application/services/permissions/permissionsCreate.service';
import { PermissionUpdateService } from '../../../application/services/permissions/permissionsUpdate.service';
import { PermissionGetAllByRoleService } from '../../../application/services/permissions/permissionsGetAllByRole.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Permissions.name, schema: PermissionsSchema },
    ]),
  ],
  controllers: [PermissionController],
  providers: [
    PermissionRepository,
    PermissionCreateService,
    PermissionGetAllByRoleService,
    PermissionUpdateService,
  ],
  exports: [
    PermissionCreateService,
    PermissionGetAllByRoleService,
    PermissionUpdateService,
  ],
})
export class PermissionModule {}
