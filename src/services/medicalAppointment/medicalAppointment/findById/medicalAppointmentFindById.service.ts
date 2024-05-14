import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IMedicalAppointmentFindByIdService } from 'src/domain/interfaces/services/medicalAppointment/medicalAppointment/findById/IMedicalAppointmentFindByIdService';

@Injectable()
export class MedicalAppointmentFindByIdService
  implements IMedicalAppointmentFindByIdService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
  ) {}

  /**
   * findById medicalAppointment
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalAppointmentResponseDto> {
    try {
      const searchMedicalAppointment =
        await this._medicalAppointmentRepository.findOne({ _id });

      if (searchMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');

      return searchMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}
