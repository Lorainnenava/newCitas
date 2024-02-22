import { Injectable } from '@nestjs/common';
import { PatientRepository } from '../../../../infrastructure/repository/patient/patient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientsGetAllService } from '../../../../domain/interfaces/service/patient/getAll/IPatientsGetAllService';

@Injectable()
export class PatientsGetAllService implements IPatientsGetAllService {
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
