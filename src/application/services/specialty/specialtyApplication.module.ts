import { Module } from '@nestjs/common';
import { SpecialtyCreateService } from './create/specialtyCreate.service';
import { SpecialtiesGetAllService } from './getAll/specialtiesGetAll.service';

@Module({
  providers: [SpecialtyCreateService, SpecialtiesGetAllService],
  exports: [SpecialtyCreateService, SpecialtiesGetAllService],
})
export class SpecialtyApplicatiomModule {}
