import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import {
  Roles,
  RolesSchema,
} from '../../../domain/collections/roles/schema/roles.entity';
import { RolesService } from '../../../application/roles/role.service';
import { RolesController } from '../../controller/roles/role.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: RolesSchema }]),
  ],
  providers: [RolesService],
  exports: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
