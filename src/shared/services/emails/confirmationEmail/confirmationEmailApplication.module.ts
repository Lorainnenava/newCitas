import { join } from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfirmationEmailService } from './confirmationEmail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

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
        dir: join(__dirname, '../../../utils/template/confirmation'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [ConfirmationEmailService],
  exports: [ConfirmationEmailService],
})
export class ConfirmationEmailApplicationModule {}
