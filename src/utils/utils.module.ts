import { JwtModule } from '@nestjs/jwt';
import { Global, Module } from '@nestjs/common';
import { DependenciesInyectionUtils } from './dependencies';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

/**
 * Module of utils layer
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
  providers: [...DependenciesInyectionUtils],
  exports: [...DependenciesInyectionUtils],
})
@Global()
export class UtilsModule {}
