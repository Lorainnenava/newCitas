import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DependenciesApplicationInyection } from './dependencies';

@Module({
  imports: [
    JwtModule.register({
      // jwt setting
      global: true,
      secret: 'MY_SECRET_KEY',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [...DependenciesApplicationInyection],
  exports: [...DependenciesApplicationInyection],
})
@Global()
export class ApplicationModule {}
