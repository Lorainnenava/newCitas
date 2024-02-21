import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { IPatientFindByIdService } from '../../../domain/interfaces/service/patient/findById/IPatientFindByIdService';
import { PatientResponseDto } from '../../../domain/entities/patient/dto/response/patient/patientResponse.dto';

@Injectable()
export class PatientFindByIdService implements IPatientFindByIdService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * findById
   * @param _id
   */
  async findById(_id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.findById(_id);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
