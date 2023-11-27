import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DocumentInfoRequestDto } from '../../user/dto/request/document/documentInfoRequest.dto';

export type doctorDocument = HydratedDocument<Doctor>;

/**
 * Schema Patients
 */
@Schema({ timestamps: true, collection: 'doctors' })
export class Doctor {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;

  /**
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

  /**
   * specialty
   */
  @Prop({ type: String })
  specialty: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
