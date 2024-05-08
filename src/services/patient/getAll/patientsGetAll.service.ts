import { Inject, Injectable } from '@nestjs/common';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientsGetAllService } from 'src/domain/interfaces/services/patient/getAll/IPatientsGetAllService';

@Injectable()
export class PatientsGetAllService implements IPatientsGetAllService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * getAll patient
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      return await this._patientRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
