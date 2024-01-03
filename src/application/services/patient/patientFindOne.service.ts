import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientResponseDto } from '../../dtos/patients/response/patient/patientResponse.dto';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientFindOneService } from '../../../domain/interfaces/service/patients/findOne/IPatientFindOneService';

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
