import { join } from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfirmationEmailService } from './confirmationEmail/confirmationEmail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfirmationMedicalAppointmentService } from './confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { WelcomeEmailPatientService } from './welcomeEmailPatient/welcomeEmailPatient.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: 'lorewow23@gmail.com',
          pass: 'ddkn hsnf ncdp zygv',
        },
      },
      defaults: {
        from: '"Center Hospital" <lorewow23@gmail.com>',
      },
      template: {
        dir: join(__dirname, '..', '..', '..', 'shared', 'utils', 'template'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [
    WelcomeEmailPatientService,
    ConfirmationEmailService,
    ConfirmationMedicalAppointmentService,
  ],
  exports: [
    WelcomeEmailPatientService,
    ConfirmationEmailService,
    ConfirmationMedicalAppointmentService,
  ],
})
export class EmailApplicationModule {}
