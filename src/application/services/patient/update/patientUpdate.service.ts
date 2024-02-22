import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../../infrastructure/repository/patient/patient.repository';
import { PatientRequestDto } from '../../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientUpdateService } from '../../../../domain/interfaces/service/patient/update/IPatientUpdateService';

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
      const searchPatient = await this.patientRepository.update(
        request._id,
        request,
      );
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
