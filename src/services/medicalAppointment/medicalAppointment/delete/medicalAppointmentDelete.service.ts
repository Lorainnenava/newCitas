import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentDeleteService } from 'src/domain/interfaces/services/medicalAppointment/medicalAppointment/delete/IDeleteMedicalAppointmentService';

@Injectable()
export class MedicalAppointmentDeleteService
  implements IMedicalAppointmentDeleteService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
  ) {}

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<MedicalAppointmentResponseDto> {
    try {
      const deleteMedicalAppointment =
        await this._medicalAppointmentRepository.delete({ _id });

      if (deleteMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');

      return deleteMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
