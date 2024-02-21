import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PatientInformationRequestDto } from '../invoice/dto/request/patientInformation/patientInformationRequest.dto';

export type medicalRequestDocument = HydratedDocument<MedicalRequest>;

/**
 * Schema MedicalRequest
 */
@Schema({ timestamps: true, collection: 'medicalRequests' })
export class MedicalRequest {
  /**
   * patientInfo
   */
  @Prop({ type: PatientInformationRequestDto })
  informationPatient?: PatientInformationRequestDto;

  /**
   * specialty
   */
  @Prop({ type: String })
  specialty: string;
}

export const MedicalRequestSchema =
  SchemaFactory.createForClass(MedicalRequest);
