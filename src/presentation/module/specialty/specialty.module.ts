import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Specialty,
  specialtySchema,
} from '../../../domain/entities/specialty/specialties.entity';
import { SpecialtyController } from '../../../infrastructure/controller/specialty/specialty.controller';
import { SpecialtyRepository } from '../../../infrastructure/repository/specialty/specialty.repository';
import { SpecialtyCreateService } from '../../../application/services/specialty/specialtyCreate.service';
import { SpecialtyDeleteService } from '../../../application/services/specialty/specialtyDelete.service';
import { SpecialtyGetAllService } from '../../../application/services/specialty/specialtyGetAll.service';

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
    SpecialtyGetAllService,
  ],
  exports: [
    SpecialtyCreateService,
    SpecialtyDeleteService,
    SpecialtyGetAllService,
  ],
  controllers: [SpecialtyController],
})
export class SpecialtyModule {}
