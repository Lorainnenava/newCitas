import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PatientRequestDto } from '../../dtos/patient/request/patient/patientRequest.dto';
import { MedicalInformationRequestDto } from '../../dtos/medicalHistory/request/medicalInformation/medicalInformationRequest.dto';
import { FamilyHistoryRequestDto } from '../../dtos/medicalHistory/request/familyHistory/familyHistoryRequest.dto';

export type medicalHistoryDocument = HydratedDocument<MedicalHistory>;

/**
 * Schema MedicalHistory
 */
@Schema({ timestamps: true, collection: 'medicalHistories' })
export class MedicalHistory {
  /**
   * informationPatient
   */
  @Prop({ type: PatientRequestDto })
  informationPatient: PatientRequestDto;

  /**
   * medicalInformation
   */
  @Prop({ type: MedicalInformationRequestDto })
  medicalInformation: MedicalInformationRequestDto;

  /**
   * familyHistory
   */
  @Prop({ type: FamilyHistoryRequestDto })
  familyHistory: FamilyHistoryRequestDto;

  /**
   * weight
   */
  @Prop({ type: Number })
  weight: number;

  /**
   * height
   */
  @Prop({ type: Number })
  height: number;
}

export const MedicalHistorySchema =
  SchemaFactory.createForClass(MedicalHistory);
