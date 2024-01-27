import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Permission,
  PermissionSchema,
} from '../../../domain/entities/permission/permission.entity';
import { PermissionRepository } from '../../../infrastructure/repository/permission/permission.repository';
import { PermissionsCreateService } from '../../../application/services/permissions/permissionsCreate.service';
import { PermissionsGetAllByRoleService } from '../../../application/services/permissions/permissionsGetAllByRole.service';
import { PermissionsUpdateService } from '../../../application/services/permissions/permissionsUpdate.service';
import { PermissionController } from '../../controller/permission/permission.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Permission.name, schema: PermissionSchema },
    ]),
  ],
  controllers: [PermissionController],
  providers: [
    PermissionRepository,
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
export class PermissionModule {}
