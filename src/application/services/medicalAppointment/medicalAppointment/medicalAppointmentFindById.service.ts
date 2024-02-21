import { Injectable, NotFoundException } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IMedicalAppointmentFindByIdService } from '../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/findById/IMedicalAppointmentFindByIdService';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

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
  async findById(_id: string): Promise<MedicalAppointmentResponseDto> {
    try {
      const searchMedicalAppointment =
        await this.medicalAppointmentRepository.findOne({ _id });
      if (searchMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return searchMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
