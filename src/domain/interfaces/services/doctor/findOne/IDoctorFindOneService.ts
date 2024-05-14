import { ObjectId } from 'mongoose';
import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorFindOneService {
  /**
   * FindOne doctor
   * @param _id
   */
  findOne(_id: ObjectId): Promise<DoctorResponseDto>;
}
