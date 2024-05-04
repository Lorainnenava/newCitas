import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPatientRepository } from '../../../../domain/interfaces/repository/patient/IPatient.repository';
import { PatientResponseDto } from '../../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientFindByIdService } from '../../../../domain/interfaces/service/patient/findById/IPatientFindByIdService';

@Injectable()
export class PatientFindByIdService implements IPatientFindByIdService {
  constructor(
    @Inject('PatientRepository') private _patientRepository: IPatientRepository,
  ) {}

  /**
   * findById
   * @param _id
   */
  async findById(_id: string): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this._patientRepository.findOne({ _id });
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }
}
