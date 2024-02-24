import { join } from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfirmationMedicalAppointmentService } from './confirmationMedicalAppointment.service';

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
        dir: join(__dirname, '../../../utils/template/medicalAppoinment'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [ConfirmationMedicalAppointmentService],
  exports: [ConfirmationMedicalAppointmentService],
})
export class ConfirmationMedicalAppointmentApplicationModule {}
