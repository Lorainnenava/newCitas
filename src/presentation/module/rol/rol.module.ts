import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rol, RolSchema } from '../../../domain/entities/rol/rol.entity';
import { RolRepository } from '../../../infrastructure/repository/rol/rol.repository';
import { RolCreateService } from '../../../application/services/rol/rolCreate.service';
import { RolesGetAllService } from '../../../application/services/rol/rolesGetAll.service';
import { RolDeleteService } from '../../../application/services/rol/rolDelete.service';
import { RolController } from '../../controller/rol/rol.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rol.name, schema: RolSchema }])],
  providers: [
    RolRepository,
    RolCreateService,
    RolesGetAllService,
    RolDeleteService,
  ],
  exports: [RolCreateService, RolesGetAllService, RolDeleteService],
  controllers: [RolController],
})
export class RolModule {}
