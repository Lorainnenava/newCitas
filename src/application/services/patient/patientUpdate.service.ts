import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { IPatientUpdateService } from '../../../domain/interfaces/service/patient/update/IPatientUpdateService';
import { PatientRequestDto } from '../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/entities/patient/dto/response/patient/patientResponse.dto';

@Injectable()
export class PatientUpdateService implements IPatientUpdateService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * update patient
   * @param request
   * @returns
   */
  async update(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.update(request);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
