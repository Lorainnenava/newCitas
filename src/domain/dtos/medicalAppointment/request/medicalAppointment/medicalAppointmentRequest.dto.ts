import {
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DoctorRequestDto } from '../../../doctor/request/doctorRequest.dto';
import { PatientInformationRequestDto } from '../../../invoice/request/patientInformation/patientInformationRequest.dto';
import { Types } from 'mongoose';

/**
 * Class MedicalAppointmentRequestDto
 */
export class MedicalAppointmentRequestDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  userInfo?: PatientInformationRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  timeAppointment: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  doctor?: DoctorRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  cancelled: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  state: boolean;
}
