import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPatientRepository } from '../../../../domain/interfaces/repository/patient/IPatient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientDeleteService } from '../../../../domain/interfaces/service/patient/delete/IPatientDeleteService';

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
