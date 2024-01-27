import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IMedicalAppointmentDeleteService } from '../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/delete/IMedicalAppointmentService';
import { MedicalAppointmentResponseDto } from '../../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class MedicalAppointmentDeleteService
  implements IMedicalAppointmentDeleteService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  async delete(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const deleteMedicalAppointment =
        await this.medicalAppointmentRepository.delete(_id);
      if (deleteMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return deleteMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
