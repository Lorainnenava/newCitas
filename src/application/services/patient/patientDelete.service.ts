import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientDeleteService } from '../../../domain/interfaces/service/patients/delete/IPatientDeleteService';

@Injectable()
export class PatientDeleteService implements IPatientDeleteService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * delete patient
   * @param _id
   */
  async delete(@Param('_id') _id: string): Promise<boolean> {
    try {
      const search = await this.patientRepository.findById(_id);
      if (!search) {
        throw new NotFoundException('This patient does not exist');
      }
      return await this.patientRepository.delete(_id);
    } catch (error) {
      throw error;
    }
  }
}
