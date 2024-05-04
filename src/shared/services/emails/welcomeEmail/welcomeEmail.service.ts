import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequestDto } from 'src/shared/interface/types';

@Injectable()
export class WelcomeEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmailWelcome(data: EmailRequestDto, url: string): Promise<void> {
    await this.mailerService.sendMail({
      to: data.email,
      subject: 'Bienvenido a Center Hospital',
      template: 'templateWelcome',
      context: {
        name: data.secondName
          ? `${data.firstName.toUpperCase()} ${data?.secondName.toUpperCase()} ${data.firstLastName.toUpperCase()} ${data?.secondLastName.toUpperCase()}`
          : `${data.firstName.toUpperCase()} ${data.firstLastName.toUpperCase()} ${data?.secondLastName.toUpperCase()}`,
        url,
      },
      attachments: [
        {
          filename: 'coverEmail.jpg',
          path: 'public/coverEmail.jpg',
          cid: 'coverEmail',
        },
        {
          filename: 'medicalAppointment.png',
          path: 'public/medicalAppointment.png',
          cid: 'medicalAppointment',
        },
        {
          filename: 'request.png',
          path: 'public/request.png',
          cid: 'request',
        },
        {
          filename: 'historial.png',
          path: 'public/historial.png',
          cid: 'historial',
        },
      ],
    });
  }
}
