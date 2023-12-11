import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PatientRequestDto } from '../../patients/dto/request/patient/patientRequest.dto';
import { FamilyHistoryRequestDto } from '../dto/request/familyHistory/familyHistoryRequest.dto';
import { MedicalInformationRequestDto } from '../dto/request/medicalInformation/medicalInformationRequest.dto';

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
