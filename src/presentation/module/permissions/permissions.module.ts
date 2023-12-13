import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Permissions,
  PermissionsSchema,
} from '../../../domain/entities/permissions/permissions.entity';
import { PermissionService } from '../../../application/services/permissions/permissions.service';
import { PermissionController } from '../../../infrastructure/controller/permissions/permission.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Permissions.name, schema: PermissionsSchema },
    ]),
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
