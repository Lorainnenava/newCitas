import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { entityConfig } from './dependencies';

@Module({
  imports: [MongooseModule.forFeature(entityConfig)],
  exports: [MongooseModule],
})
export class EntityModule {}
