import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Entities } from './dependencies';

/**
 * Module of domain layer
 */
@Module({
  imports: [MongooseModule.forFeature(Entities)],
  exports: [MongooseModule],
})
@Global()
export class DomainModule {}
