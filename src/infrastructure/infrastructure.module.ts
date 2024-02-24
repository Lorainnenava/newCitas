import { Global, Module } from '@nestjs/common';
import { DomainModule } from '../domain/entity.module';
import { DependenciesInjectionInfrastructure } from './dependencies';

/**
 * Module of infrastructure layer
 */
@Module({
  imports: [DomainModule],
  providers: [...DependenciesInjectionInfrastructure],
  exports: [...DependenciesInjectionInfrastructure],
})
@Global()
export class InfrastructureModule {}
