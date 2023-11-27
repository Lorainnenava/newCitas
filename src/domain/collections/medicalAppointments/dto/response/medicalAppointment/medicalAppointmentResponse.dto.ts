import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { userInfoResponseDto } from '../user/userInfoResponse.dto';
import { DoctorResponseDto } from '../../../../doctors/dto/response/doctorResponse.dto';

/**
 * Class MedicalAppointmentResponseDto
 */
export class MedicalAppointmentResponseDto extends Document {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

  @ApiProperty()
  userInfo: userInfoResponseDto;

  @ApiProperty()
  specialty: string;

  @ApiProperty()
  timeAppointment: string;

  @ApiProperty()
  doctor: DoctorResponseDto;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  statusAppointment: boolean;

  @ApiProperty()
  cancelled: boolean;

  @ApiProperty()
  state: boolean;
}
