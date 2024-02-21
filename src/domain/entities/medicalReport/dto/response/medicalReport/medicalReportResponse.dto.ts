import { ApiProperty } from '@nestjs/swagger';
import { TreatmentResponsetDto } from '../treatment/treatmentResponse.sto';
import { DocumentInfoResponseDto } from '../../../../user/dto/response/document/documentInfoResponse.dto';

/**
 * class MedicalReportResponseDto
 */
export class MedicalReportResponseDto {
  @ApiProperty()
  patientFisrtName: string;

  @ApiProperty()
  patientSecondName: string;

  @ApiProperty()
  patientFirstLastName: string;

  @ApiProperty()
  patientSecondLastName: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  documentInfo: DocumentInfoResponseDto;

  @ApiProperty()
  reasonForVisit: string;

  @ApiProperty()
  physicalExam: string;

  @ApiProperty()
  treatment: TreatmentResponsetDto;
}
