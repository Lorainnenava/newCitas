import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Specialty,
  specialtySchema,
} from '../../../domain/entities/specialty/specialty.entity';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { SpecialtyCreateService } from '../../../application/services/specialty/specialtyCreate.service';
import { SpecialtyDeleteService } from '../../../application/services/specialty/specialtyDelete.service';
import { SpecialtiesGetAllService } from '../../../application/services/specialty/specialtiesGetAll.service';
import { SpecialtyController } from '../../controller/specialty/specialty.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Specialty.name, schema: specialtySchema },
    ]),
  ],
  providers: [
    SpecialtyRepository,
    SpecialtyCreateService,
    SpecialtyDeleteService,
    SpecialtiesGetAllService,
  ],
  exports: [
    SpecialtyCreateService,
    SpecialtyDeleteService,
    SpecialtiesGetAllService,
  ],
  controllers: [SpecialtyController],
})
export class SpecialtyModule {}
