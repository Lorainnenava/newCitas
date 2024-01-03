import { Body, Param, Injectable } from '@nestjs/common';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentRequestDto } from '../../../dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentUpdateService } from '../../../../domain/interfaces/service/medicalAppointments/medicalAppointment/update/IMedicalAppointmentUpdateService';

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
   * @param _id
   * @returns
   */
  async update(
    @Body() request: MedicalAppointmentRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentRepository.update(request, _id);
    } catch (error) {
      throw error;
    }
  }
}
