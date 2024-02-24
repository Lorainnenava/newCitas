import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentRequestDto } from '../../../../../domain/entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentUpdateService } from '../../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/update/IMedicalAppointmentUpdateService';

@Injectable()
export class MedicalAppointmentUpdateService
  implements IMedicalAppointmentUpdateService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
  ) {}

  /**
   * update medicalAppointment
   * @param request
   * @returns
   */
  async update(
    _id: string,
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this._medicalAppointmentRepository.update({ _id }, request);
    } catch (error) {
      throw error;
    }
  }
}
