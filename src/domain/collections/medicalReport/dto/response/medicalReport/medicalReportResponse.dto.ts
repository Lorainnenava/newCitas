import { ApiProperty } from '@nestjs/swagger';
import { TreatmentResponsetDto } from '../treatment/treatmentResponse.sto';
import { MedicalInformationResponseDto } from '../../../../medicalHistory/dto/response/medicalInformation/medicalInformationResponse.dto';

/**
 * class MedicalReportResponseDto
 */
export class MedicalReportResponseDto {
  @ApiProperty()
  patientName: string;

  @ApiProperty()
  patientMiddleName: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  reasonForVisit: string;

  @ApiProperty()
  weight: string;

  @ApiProperty()
  medicalInformation: MedicalInformationResponseDto;

  @ApiProperty()
  physicalExam: string;

  @ApiProperty()
  treatment: TreatmentResponsetDto;
}
