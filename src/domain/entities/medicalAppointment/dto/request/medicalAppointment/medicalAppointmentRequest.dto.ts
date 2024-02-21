import {
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { PatientInformationRequestDto } from '../../../../invoice/dto/request/patientInformation/patientInformationRequest.dto';
import { DoctorRequestDto } from '../../../../doctor/dto/request/doctorRequest.dto';

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
