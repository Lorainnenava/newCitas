import { Inject, Injectable } from '@nestjs/common';
import { DoctorResponseDto } from '../../../../domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from '../../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { IDoctorDeleteService } from '../../../../domain/interfaces/service/doctor/delete/IDoctorDeleteService';

@Injectable()
export class DoctorDeleteService implements IDoctorDeleteService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<DoctorResponseDto> {
    try {
      const deleteDoctor = await this._doctorRepository.delete({ _id });
      return deleteDoctor;
    } catch (error) {
      throw new Error(error);
    }
  }
}
