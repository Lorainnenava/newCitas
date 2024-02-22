import { Injectable } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentsGetAllService } from '../../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/getAll/IMedicalAppointmentsGetAllService';

@Injectable()
export class MedicalAppointmentsGetAllService
  implements IMedicalAppointmentsGetAllService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * getAll medicalAppointment
   * @returns
   */
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
