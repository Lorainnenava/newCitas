import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ConfirmationEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendConfirmationEmail(token: string, email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Confirma tu dirección email',
      template: 'confirmation/templateConfirmation',
      context: {
        token,
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
