import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfirmationMedicalAppointmentRequestDtoRequestDto } from 'src/shared/interface/types';

@Injectable()
export class ConfirmationMedicalAppointmentService {
  constructor(private readonly mailerService: MailerService) {}

  async sendConfirmation(
    data: ConfirmationMedicalAppointmentRequestDtoRequestDto,
  ): Promise<void> {
    /**
     * Establish name
     */
    const name = data.secondName
      ? `${data.firstName.toUpperCase()} ${data?.secondName.toUpperCase()} ${data.firstLastName.toUpperCase()} ${data?.secondLastName.toUpperCase()}`
      : `${data.firstName.toUpperCase()} ${data.firstLastName.toUpperCase()} ${data?.secondLastName.toUpperCase()}`;

    await this.mailerService.sendMail({
      to: data.email,
      subject: 'Center Hospital te confirma tu cita',
      template: 'medicalAppointment/templateMedicalAppointment',
      context: {
        name,
        date: data?.date,
        timeAppointment: data?.timeAppointment,
        doctor: data?.doctor,
        place: 'CALLE 30 #17 -69',
        specialty: data?.specialty,
        firstName: data?.firstName,
      },
      attachments: [
        {
          filename: 'coverMedicalAppointment.jpg',
          path: 'public/coverMedicalAppointment.jpg',
          cid: 'coverMedicalAppointment',
        },
      ],
    });
  }
}
