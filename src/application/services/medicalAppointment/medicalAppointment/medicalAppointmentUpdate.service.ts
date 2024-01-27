import { Body, Injectable } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IMedicalAppointmentUpdateService } from '../../../../domain/interfaces/service/medicalAppointment/medicalAppointment/update/IMedicalAppointmentUpdateService';
import { MedicalAppointmentRequestDto } from '../../../../domain/dtos/medicalAppointment/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class MedicalAppointmentUpdateService
  implements IMedicalAppointmentUpdateService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * update medicalAppointment
   * @param request
   * @returns
   */
  async update(
    @Body() request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
