import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './protectRoute/auth.guard';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DependenciesInyectionUtils } from './dependencies';

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
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [
    ...DependenciesInyectionUtils,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [...DependenciesInyectionUtils],
})
@Global()
export class UtilsModule {}
