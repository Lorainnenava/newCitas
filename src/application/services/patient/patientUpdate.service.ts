import { Body, Param, Injectable, NotFoundException } from '@nestjs/common';
import { PatientRequestDto } from '../../dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../dtos/patients/response/patient/patientResponse.dto';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { IPatientUpdateService } from '../../../domain/interfaces/service/patients/update/IPatientUpdateService';

@Injectable()
export class PatientUpdateService implements IPatientUpdateService {
  constructor(private patientRepository: PatientRepository) {}

  /**
   * update patient
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: PatientRequestDto,
    @Param('_id') _id: string,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientRepository.update(request, _id);
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
