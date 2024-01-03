import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentGetAllByIdService } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/getAllById/IMedicalAppointmentGetAllByIdService';

@Injectable()
export class MedicalAppointmentGetAllByIdService
  implements IMedicalAppointmentGetAllByIdService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * getAllById medicalAppointment
   * @param _id
   * @returns
   */
  async getAllById(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentRepository.getAllById(user);
    } catch (error) {
      throw error;
    }
  }
}
