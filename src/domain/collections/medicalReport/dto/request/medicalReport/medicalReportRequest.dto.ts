import { ApiProperty } from '@nestjs/swagger';
import { TreatmentRequestDto } from '../treatment/treatmentRequest.dto';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { DocumentInfoRequestDto } from '../../../../user/dto/request/document/documentInfoRequest.dto';

/**
 * class MedicalReportRequestDto
 */
export class MedicalReportRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientFisrtName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientSecondName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientFirstLastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientSecondLastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  documentInfo: DocumentInfoRequestDto

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  reasonForVisit: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  physicalExam: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  treatment: TreatmentRequestDto;
}
