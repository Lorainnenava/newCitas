import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../../infrastructure/repository/patient/patient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientDeleteService } from '../../../../domain/interfaces/service/patient/delete/IPatientDeleteService';

@Injectable()
export class PatientDeleteService implements IPatientDeleteService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * delete patient
   * @param _id
   */
  async delete(_id: string): Promise<PatientResponseDto> {
    try {
      const search = await this.patientRepository.findOne({ _id });
      if (!search) {
        throw new NotFoundException('This patient does not exist');
      }
      return await this.patientRepository.delete({ _id });
    } catch (error) {
      throw error;
    }
  }
}
