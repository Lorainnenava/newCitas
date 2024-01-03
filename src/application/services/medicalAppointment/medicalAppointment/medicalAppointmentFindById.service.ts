import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentFindByIdService } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/findById/IMedicalAppointmentFindByIdService';

@Injectable()
export class MedicalAppointmentFindByIdService
  implements IMedicalAppointmentFindByIdService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * findById medicalAppointment
   * @param _id
   * @returns
   */
  async findById(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const searchMedicalAppointment =
        await this.medicalAppointmentRepository.findById(_id);

      if (searchMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return searchMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
