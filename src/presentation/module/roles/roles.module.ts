import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Roles,
  RolesSchema,
} from '../../../domain/entities/roles/roles.entity';
import { RolesService } from '../../../application/services/roles/role.service';
import { RolesController } from '../../../infrastructure/controller/roles/role.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: RolesSchema }]),
  ],
  providers: [RolesService],
  exports: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
