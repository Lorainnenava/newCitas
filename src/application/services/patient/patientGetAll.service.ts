import { Injectable } from '@nestjs/common';
import { PatientResponseDto } from '../../dtos/patients/response/patient/patientResponse.dto';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientGetAllService } from '../../../domain/interfaces/service/patients/getAll/IPatientGetAllService';

@Injectable()
export class PatientGetAllService implements IPatientGetAllService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * getAll patient
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      return await this.patientRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
