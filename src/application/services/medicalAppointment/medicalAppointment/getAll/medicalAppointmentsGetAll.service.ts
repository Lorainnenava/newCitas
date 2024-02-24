import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentsGetAllService } from '../../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/getAll/IMedicalAppointmentsGetAllService';

@Injectable()
export class MedicalAppointmentsGetAllService
  implements IMedicalAppointmentsGetAllService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
  ) {}

  /**
   * getAll medicalAppointment
   * @returns
   */
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this._medicalAppointmentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
