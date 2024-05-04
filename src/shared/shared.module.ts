import { JwtModule } from '@nestjs/jwt';
import { Global, Module } from '@nestjs/common';
import { DependenciesInyectionShared } from './dependencies';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

/**
 * Module of shared layer
 */
@Module({
  imports: [
    InfrastructureModule,
    JwtModule.register({
      // jwt setting
      global: true,
      secret: 'MY_SECRET_KEY',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [...DependenciesInyectionShared],
  exports: [...DependenciesInyectionShared],
})
@Global()
export class SharedModule {}
