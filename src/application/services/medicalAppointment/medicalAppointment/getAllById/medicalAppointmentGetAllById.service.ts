import { Inject, Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentsGetAllByIdService } from '../../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/getAllById/IMedicalAppointmentsGetAllByIdService';

@Injectable()
export class MedicalAppointmentGetAllByIdService
  implements IMedicalAppointmentsGetAllByIdService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
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
      return await this._medicalAppointmentRepository.getAll(user);
    } catch (error) {
      throw error;
    }
  }
}
