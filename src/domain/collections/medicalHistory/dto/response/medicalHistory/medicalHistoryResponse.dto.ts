import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { FamilyHistoryResponseDto } from '../familyHistory/familyHistoryResponse.dto';
import { PatientResponseDto } from '../../../../patients/dto/response/patient/patientResponse.dto';
import { MedicalInformationResponseDto } from '../medicalInformation/medicalInformationResponse.dto';

/**
 * class MedicalHistoryResponseDto
 */
export class MedicalHistoryResponseDto extends Document {
  @ApiProperty({ type: String })
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
