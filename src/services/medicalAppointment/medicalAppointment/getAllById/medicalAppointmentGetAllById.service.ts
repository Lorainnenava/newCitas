import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentsGetAllByIdService } from 'src/domain/interfaces/services/medicalAppointment/medicalAppointment/getAllById/IMedicalAppointmentsGetAllByIdService';
import { RequestUser } from 'src/shared/interface/types';

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
