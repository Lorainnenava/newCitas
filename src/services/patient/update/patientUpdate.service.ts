import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PatientRequestDto } from '../../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientUpdateService } from '../../../../domain/interfaces/service/patient/update/IPatientUpdateService';
import { IPatientRepository } from '../../../../domain/interfaces/repository/patient/IPatient.repository';

@Injectable()
export class PatientUpdateService implements IPatientUpdateService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * update patient
   * @param request
   * @returns
   */
  async update(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this._patientRepository.update(
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
