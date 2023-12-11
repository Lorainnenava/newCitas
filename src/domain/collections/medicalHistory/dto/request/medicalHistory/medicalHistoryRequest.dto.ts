import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { FamilyHistoryRequestDto } from '../../request/familyHistory/familyHistoryRequest.dto';
import { PatientRequestDto } from '../../../../patients/dto/request/patient/patientRequest.dto';
import { MedicalInformationRequestDto } from '../../request/medicalInformation/medicalInformationRequest.dto';

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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  weight: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  height: number;
}
