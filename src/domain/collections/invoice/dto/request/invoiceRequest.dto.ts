import {
  IsObject,
  IsString,
  IsNotEmpty,
  IsDate,
  IsInt,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PatientRequestDto } from '../../../patients/dto/request/patient/patientRequest.dto';

/**
 * class InvoiceRequestDto
 */
export class InvoiceRequestDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  code: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  hospital: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  patientInformation: PatientRequestDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  cost: Number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  state: boolean;
}
