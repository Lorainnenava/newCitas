import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientDeleteService } from 'src/domain/interfaces/services/patient/delete/IPatientDeleteService';

@Injectable()
export class PatientDeleteService implements IPatientDeleteService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * Eliminar un paciente
   * @param _id
   */
  async delete(_id: string): Promise<PatientResponseDto> {
    try {
      const search = await this._patientRepository.findOne({ _id });

      if (!search) {
        throw new NotFoundException('Este paciente no existe');
      }

      const deletePatient = await this._patientRepository.delete({ _id });

      return deletePatient;
    } catch (error) {
      throw error;
    }
  }
}
