import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { PatientRequestDto } from 'src/domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from 'src/domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';
import { IPatientUpdateService } from 'src/domain/interfaces/services/patient/update/IPatientUpdateService';

@Injectable()
export class PatientUpdateService implements IPatientUpdateService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * Actualizar un paciente
   * @param request
   * @returns
   */
  async update(
    _id: ObjectId,
    request: PatientRequestDto,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this._patientRepository.findOne({ _id });

      if (!searchPatient)
        throw new NotFoundException('Este paciente no existe');

      const update = await this._patientRepository.update(_id, request);

      return update;
    } catch (error) {
      throw error;
    }
  }
}
