import { ApiProperty } from '@nestjs/swagger';
import { PatientRequestDto } from '../../../../patients/dto/request/patient/patientRequest.dto';
import { FamilyHistoryRequestDto } from '../../request/familyHistory/familyHistoryRequest.dto';
import { MedicalInformationRequestDto } from '../../request/medicalInformation/medicalInformationRequest.dto';
import { IsNotEmpty, IsObject } from 'class-validator';

/**
 * class MedicalHistoryRequestDto
 */
export class MedicalHistoryRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  informationPatient: PatientRequestDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  medicalInformation: MedicalInformationRequestDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  familyHistory: FamilyHistoryRequestDto;
}
