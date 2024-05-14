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
   * Obtener todos los pacientes
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      const obtainPatients = await this._patientRepository.getAll();

      return obtainPatients;
    } catch (error) {
      throw error;
    }
  }
}
