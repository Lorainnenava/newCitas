import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequestDto } from 'src/shared/interface/types';
import { ConstructorNameService } from 'src/shared/utils/constructorName';

@Injectable()
export class WelcomeEmailService {
  constructor(
    private readonly _mailerService: MailerService,
    private readonly _constructorNameService: ConstructorNameService,
  ) {}

  async sendEmailWelcome(data: EmailRequestDto, url: string): Promise<void> {
    // Build fullName
    const fullName = await this._constructorNameService.constructorName([
      data?.firstName,
      data?.secondName,
      data?.firstLastName,
      data?.secondLastName,
    ]);

    await this._mailerService.sendMail({
      to: data?.email,
      subject: 'Bienvenido a Center Hospital',
      template: 'templateWelcome',
      context: {
        name: fullName.toLocaleUpperCase(),
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
