import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { userInfoRequestDto } from '../user/userInfoRequest.dto';
import { DoctorRequestDto } from '../../../../doctors/dto/request/doctorRequest.dto';

/**
 * Class MedicalAppointmentRequestDto
 */
export class MedicalAppointmentRequestDto {
  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  userInfo: userInfoRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  specialty: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  timeAppointment: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  doctor: DoctorRequestDto;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  statusAppointment: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  cancelled?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  state?: boolean;
}
