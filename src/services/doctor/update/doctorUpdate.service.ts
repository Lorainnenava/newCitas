import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { DoctorRequestDto } from 'src/domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorUpdateService } from 'src/domain/interfaces/services/doctor/update/IUpdateDoctorService';

@Injectable()
export class DoctorUpdateService implements IDoctorUpdateService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * Actualizar un doctor
   * @param request
   * @returns
   */
  async update(
    _id: ObjectId,
    request: DoctorRequestDto,
  ): Promise<DoctorResponseDto> {
    try {
      const findDoctor = await this._doctorRepository.findOne({
        _id,
      });

      if (!findDoctor) throw new NotFoundException('Este doctor no existe');

      const updateDoctor = await this._doctorRepository.update(
        { _id },
        request,
      );

      return updateDoctor;
    } catch (error) {
      throw error;
    }
  }
}
