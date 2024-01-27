import {
  IsInt,
  IsObject,
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { PatientInformationRequestDto } from '../patientInformation/patientInformationRequest.dto';

/**
 * class InvoiceRequestDto
 */
export class InvoiceRequestDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  code: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  patientInformation?: PatientInformationRequestDto;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  _idMedicalAppointment: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  cost: Number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  paid?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  state?: boolean;
}
