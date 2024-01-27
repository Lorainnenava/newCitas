import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { IPatientUpdateService } from '../../../domain/interfaces/service/patient/update/IPatientUpdateService';
import { PatientResponseDto } from '../../../domain/dtos/patient/response/patient/patientResponse.dto';
import { PatientRequestDto } from '../../../domain/dtos/patient/request/patient/patientRequest.dto';

@Injectable()
export class PatientUpdateService implements IPatientUpdateService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * update patient
   * @param request
   * @returns
   */
  async update(
    @Body() request: PatientRequestDto,
  ): Promise<PatientResponseDto> {
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
