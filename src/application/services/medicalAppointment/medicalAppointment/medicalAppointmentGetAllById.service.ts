import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IMedicalAppointmentsGetAllByIdService } from '../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/getAllById/IMedicalAppointmentsGetAllByIdService';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class MedicalAppointmentGetAllByIdService
  implements IMedicalAppointmentsGetAllByIdService
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
      return await this.medicalAppointmentRepository.getAll(user);
    } catch (error) {
      throw error;
    }
  }
}
