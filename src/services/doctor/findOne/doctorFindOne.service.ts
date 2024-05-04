import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DoctorResponseDto } from '../../../../domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from '../../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { IDoctorFindOneService } from '../../../../domain/interfaces/service/doctor/findOne/IDoctorFindOneService';

@Injectable()
export class DoctorFindOneService implements IDoctorFindOneService {
  constructor(
    @Inject('DoctorRepository')
    private readonly _doctorRepository: IDoctorRepository,
  ) {}

  /**
   * findOne doctor
   * @param documentNumber
   * @returns
   */
  async findOne(documentNumber: number): Promise<DoctorResponseDto> {
    try {
      const findDoctor = await this._doctorRepository.findOne({
        'documentInfo.documentNumber': Number(documentNumber),
      });
      if (!findDoctor)
        throw new NotFoundException('This doctor does not exist');
      return findDoctor;
    } catch (error) {
      throw error;
    }
  }
}
