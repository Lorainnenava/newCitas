import { Injectable } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentGetAllService } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/getAll/IMedicalAppointmentGetAllService';

@Injectable()
export class MedicalAppointmentGetAllService
  implements IMedicalAppointmentGetAllService
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
