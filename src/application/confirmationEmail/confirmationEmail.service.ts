import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ConfirmationEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendConfirmationEmail(
    token: string,
    email: string,
    name: string,
  ): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Confirma tu dirección email',
      template: 'templateConfirmation',
      context: {
        token,
        name: name.toLocaleUpperCase(),
      },
      attachments: [
        {
          filename: 'confirmation.jpg',
          path: 'public/confirmation.jpg',
          cid: 'confirmation',
        },
      ],
    });
  }
}
