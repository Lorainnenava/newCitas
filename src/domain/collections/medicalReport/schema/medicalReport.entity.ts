import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MedicalInformationRequestDto } from '../../medicalHistory/dto/request/medicalInformation/medicalInformationRequest.dto';
import { TreatmentRequestDto } from '../dto/request/treatment/treatmentRequest.dto';

export type medicalReportDocument = HydratedDocument<MedicalReport>;

/**
 * Schema MedicalReport
 */
@Schema({ timestamps: true, collection: 'medicalReports' })
export class MedicalReport {
  /**
   * patientName
   */
  @Prop({ type: String })
  patientName: string;

  /**
   * patientMiddleName
   */
  @Prop({ type: String })
  patientMiddleName: string;

  /**
   * gender
   */
  @Prop({ type: String })
  gender: string;

  /**
   * age
   */
  @Prop({ type: Number })
  age: number;

  /**
   * reasonForVisit
   */
  @Prop({ type: String })
  reasonForVisit: string;

  /**
   * weight
   */
  @Prop({ type: String })
  weight: string;

  /**
   * medicalInformation
   */
  @Prop({ type: MedicalInformationRequestDto })
  medicalInformation: MedicalInformationRequestDto;

  /**
   * physicalExam
   */
  @Prop({ type: String })
  physicalExam: string;

  /**
   * treatment
   */
  @Prop({ type: TreatmentRequestDto })
  treatment: TreatmentRequestDto;
}

export const MedicalReportSchema = SchemaFactory.createForClass(MedicalReport);
