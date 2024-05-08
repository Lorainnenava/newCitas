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
   * delete patient
   * @param _id
   */
  async delete(_id: string): Promise<PatientResponseDto> {
    try {
      const search = await this._patientRepository.findOne({ _id });
      if (!search) {
        throw new NotFoundException('This patient does not exist');
      }
      return await this._patientRepository.delete({ _id });
    } catch (error) {
      throw error;
    }
  }
}
