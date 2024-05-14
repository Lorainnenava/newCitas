import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { DoctorResponseDto } from 'src/domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';
import { IDoctorFindOneService } from 'src/domain/interfaces/services/doctor/findOne/IDoctorFindOneService';

@Injectable()
export class DoctorFindOneService implements IDoctorFindOneService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * Buscar un doctor por su _id
   * @param documentNumber
   * @returns
   */
  async findOne(_id: ObjectId): Promise<DoctorResponseDto> {
    try {
      const findDoctor = await this._doctorRepository.findOne({
        _id,
      });

      if (!findDoctor) throw new NotFoundException('Este doctor no existe');

      return findDoctor;
    } catch (error) {
      throw error;
    }
  }
}
