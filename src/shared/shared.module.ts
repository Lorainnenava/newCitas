import { JwtModule } from '@nestjs/jwt';
import { Global, Module } from '@nestjs/common';
import { DependenciesInyectionShared } from './dependencies';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ConfirmationEmailApplicationModule } from './services/emails/confirmationEmail/confirmationEmailApplication.module';
import { ConfirmationMedicalAppointmentApplicationModule } from './services/emails/confirmationMedicalAppointment/confirmationMedicalAppointmentApplication.module';
import { WelcomeEmailApplicationModule } from './services/emails/welcomeEmail/welcomeEmailApplication.module';

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
      signOptions: { expiresIn: '2h' },
    }),
    ConfirmationEmailApplicationModule,
    ConfirmationMedicalAppointmentApplicationModule,
    WelcomeEmailApplicationModule,
  ],
  providers: [...DependenciesInyectionShared],
  exports: [
    ...DependenciesInyectionShared,
    ConfirmationEmailApplicationModule,
    ConfirmationMedicalAppointmentApplicationModule,
    WelcomeEmailApplicationModule,
  ],
})
@Global()
export class SharedModule {}
