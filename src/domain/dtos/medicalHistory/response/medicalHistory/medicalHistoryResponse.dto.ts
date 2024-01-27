import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { FamilyHistoryResponseDto } from '../familyHistory/familyHistoryResponse.dto';
import { MedicalInformationResponseDto } from '../medicalInformation/medicalInformationResponse.dto';
import { PatientResponseDto } from '../../../patient/response/patient/patientResponse.dto';

/**
 * class MedicalHistoryResponseDto
 */
export class MedicalHistoryResponseDto extends Document {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  informationPatient: PatientResponseDto;

  @ApiProperty()
  medicalInformation: MedicalInformationResponseDto;

  @ApiProperty()
  familyHistory: FamilyHistoryResponseDto;

  @ApiProperty()
  weight: number;

  @ApiProperty()
  height: number;
}
