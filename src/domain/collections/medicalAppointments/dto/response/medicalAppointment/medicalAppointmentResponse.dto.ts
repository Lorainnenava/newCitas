import { ApiProperty } from '@nestjs/swagger';
import { userInfoResponseDto } from '../user/userInfoResponse.dto';
import { Document, Types } from 'mongoose';

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
  doctor: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  statusAppointment: boolean;

  @ApiProperty()
  state: boolean;
}
