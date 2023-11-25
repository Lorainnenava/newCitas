import { ApiProperty } from '@nestjs/swagger';
import { MedicalInformationRequestDto } from '../../../../medicalHistory/dto/request/medicalInformation/medicalInformationRequest.dto';
import { TreatmentRequestDto } from '../treatment/treatmentRequest.dto';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';

/**
 * class MedicalReportRequestDto
 */
export class MedicalReportRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientMiddleName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  reasonForVisit: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  weight: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  medicalInformation: MedicalInformationRequestDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  physicalExam: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  treatment: TreatmentRequestDto;
}
