import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { userInfoRequestDto } from '../user/userInfoRequest.dto';

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
  @IsString()
  @IsNotEmpty()
  doctor: string;

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
  state?: boolean;
}
