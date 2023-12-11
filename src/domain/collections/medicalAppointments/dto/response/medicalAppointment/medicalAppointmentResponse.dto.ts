import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { DoctorResponseDto } from '../../../../doctors/dto/response/doctorResponse.dto';
import { PatientInformationResponseDto } from '../../../../invoice/dto/response/patientInformation/patientResponse.dto';

/**
 * Class MedicalAppointmentResponseDto
 */
export class MedicalAppointmentResponseDto extends Document {
  @ApiProperty({ type: String })
  _id?: Types.ObjectId;

  @ApiProperty()
  userInfo: PatientInformationResponseDto;

  @ApiProperty()
  timeAppointment: string;

  @ApiProperty()
  doctor: DoctorResponseDto;

  @ApiProperty()
  date: string;

  @ApiProperty()
  cancelled: boolean;

  @ApiProperty()
  state: boolean;
}
