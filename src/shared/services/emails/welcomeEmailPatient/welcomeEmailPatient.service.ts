import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequestDto } from 'src/shared/interface/types';
import { ConstructorNameService } from 'src/shared/utils/constructorName';

@Injectable()
export class WelcomeEmailPatientService {
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
      subject: '¡Tu afiliación a Center Hospital se ha completado con éxito!',
      template: 'welcome/templateWelcomePatient',
      context: {
        name: fullName?.toLocaleUpperCase(),
        url,
      },
      attachments: [
        {
          filename: 'coverEmail.jpg',
          path: 'public/coverEmail.jpg',
          cid: 'coverEmail',
        },
      ],
    });
  }
}
