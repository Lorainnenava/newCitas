import { Param, Injectable, NotFoundException } from '@nestjs/common';
import { PatientResponseDto } from '../../dtos/patients/response/patient/patientResponse.dto';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientFindByIdService } from '../../../domain/interfaces/service/patients/findById/IPatientFindByIdService';

@Injectable()
export class PatientFindByIdService implements IPatientFindByIdService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * findById
   * @param _id
   */
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.findById(_id);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
