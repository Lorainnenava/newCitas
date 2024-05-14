import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientFindByIdService } from 'src/domain/interfaces/services/patient/findById/IPatientFindByIdService';

@Injectable()
export class PatientFindByIdService implements IPatientFindByIdService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * Buscar un paciente por el _id
   * @param _id
   */
  async findById(_id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this._patientRepository.findOne({ _id });

      if (!searchPatient)
        throw new NotFoundException('Este paciente no existe');

      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
