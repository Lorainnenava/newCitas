import { Module } from '@nestjs/common';
import { DependenciesInjectionInfrastructure } from './dependencies';
import { EntityModule } from '../domain/entity.module';

@Module({
  imports: [EntityModule],
  providers: [...DependenciesInjectionInfrastructure],
  exports: [...DependenciesInjectionInfrastructure],
})
export class InfrastructureModule {}
