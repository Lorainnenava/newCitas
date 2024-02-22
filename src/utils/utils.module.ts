import { Global, Module } from '@nestjs/common';
import { DependenciesInyection } from './dependencies';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [...DependenciesInyection],
  exports: [...DependenciesInyection],
})
@Global()
export class UtilsModule {}
