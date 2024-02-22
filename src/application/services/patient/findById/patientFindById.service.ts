import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../../infrastructure/repository/patient/patient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientFindByIdService } from '../../../../domain/interfaces/service/patient/findById/IPatientFindByIdService';

@Injectable()
export class PatientFindByIdService implements IPatientFindByIdService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * findById
   * @param _id
   */
  async findById(_id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.findOne({ _id });
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
