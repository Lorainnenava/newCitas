import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Roles,
  RolesSchema,
} from '../../../domain/entities/roles/roles.entity';
import { RolesController } from '../../../infrastructure/controller/roles/role.controller';
import { RolesCreateService } from '../../../application/services/roles/roleCreate.service';
import { RolesGetAllService } from '../../../application/services/roles/roleGetAll.service';
import { RolesDeleteService } from '../../../application/services/roles/roleDelete.service';
import { RolesRepository } from '../../../infrastructure/repository/roles/roles.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: RolesSchema }]),
  ],
  providers: [
    RolesRepository,
    RolesCreateService,
    RolesGetAllService,
    RolesDeleteService,
  ],
  exports: [RolesCreateService, RolesGetAllService, RolesDeleteService],
  controllers: [RolesController],
})
export class RolesModule {}
