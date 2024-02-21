import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../user/dto/request/document/documentInfoRequest.dto';
import { TreatmentRequestDto } from './dto/request/treatment/treatmentRequest.dto';

export type medicalReportDocument = HydratedDocument<MedicalReport>;

/**
 * Schema MedicalReport
 */
@Schema({ timestamps: true, collection: 'medicalReports' })
export class MedicalReport {
  /**
   * patientFisrtName
   */
  @Prop({ type: String })
  patientFisrtName: string;

  /**
   * patientSecondName
   */
  @Prop({ type: String })
  patientSecondName: string;

  /**
   * patientFirstLastName
   */
  @Prop({ type: String })
  patientFirstLastName: string;

  /**
   * patientSecondLastName
   */
  @Prop({ type: String })
  patientSecondLastName: string;

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
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

  /**
   * reasonForVisit
   */
  @Prop({ type: String })
  reasonForVisit: string;

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
