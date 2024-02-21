import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { FamilyHistoryRequestDto } from '../../request/familyHistory/familyHistoryRequest.dto';
import { MedicalInformationRequestDto } from '../../request/medicalInformation/medicalInformationRequest.dto';
import { Types } from 'mongoose';
import { PatientRequestDto } from '../../../../patient/dto/request/patient/patientRequest.dto';

/**
 * class MedicalHistoryRequestDto
 */
export class MedicalHistoryRequestDto {
  @ApiProperty()
  _id?: Types.ObjectId;

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
