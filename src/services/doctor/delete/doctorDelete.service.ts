import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorDeleteService } from 'src/domain/interfaces/services/doctor/delete/IDoctorDeleteService';

@Injectable()
export class DoctorDeleteService implements IDoctorDeleteService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * Eliminar un doctor
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<DoctorResponseDto> {
    try {
      const searchDoctor = await this._doctorRepository.findOne({ _id });

      if (!searchDoctor) throw new NotFoundException('Este doctor no existe');

      const deleteDoctor = await this._doctorRepository.delete({ _id });

      return deleteDoctor;
    } catch (error) {
      throw new Error(error);
    }
  }
}
