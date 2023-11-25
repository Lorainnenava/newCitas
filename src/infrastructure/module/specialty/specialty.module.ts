import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SpecialtyService } from '../../../application/specialty/specialty.service';
import { SpecialtyController } from '../../controller/specialty/specialty.controller';
import {
  Specialty,
  specialtySchema,
} from '../../../domain/collections/specialty/schema/specialties.entity';

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
