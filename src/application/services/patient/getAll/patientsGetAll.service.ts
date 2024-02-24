import { Inject, Injectable } from '@nestjs/common';
import { IPatientRepository } from '../../../../domain/interfaces/repository/patient/IPatient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientsGetAllService } from '../../../../domain/interfaces/service/patient/getAll/IPatientsGetAllService';

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
