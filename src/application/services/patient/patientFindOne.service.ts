import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { IPatientFindOneService } from '../../../domain/interfaces/service/patient/findOne/IPatientFindOneService';
import { PatientResponseDto } from '../../../domain/dtos/patient/response/patient/patientResponse.dto';

@Injectable()
export class PatientFindOneService implements IPatientFindOneService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * findOne
   * @param documentNumber
   */
  async findOne(documentNumber: number): Promise<PatientResponseDto> {
    try {
      const searchPatient =
        await this.patientRepository.findOne(documentNumber);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
