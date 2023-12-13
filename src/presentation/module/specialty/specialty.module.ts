import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Specialty,
  specialtySchema,
} from '../../../domain/entities/specialty/specialties.entity';
import { SpecialtyService } from '../../../application/services/specialty/specialty.service';
import { SpecialtyController } from '../../../infrastructure/controller/specialty/specialty.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Specialty.name, schema: specialtySchema },
    ]),
  ],
  providers: [SpecialtyService],
  exports: [SpecialtyService],
  controllers: [SpecialtyController],
})
export class SpecialtyModule {}
