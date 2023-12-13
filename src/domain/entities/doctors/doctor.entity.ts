import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../../../application/dtos/user/request/document/documentInfoRequest.dto';

export type doctorDocument = HydratedDocument<Doctor>;

/**
 * Schema Patients
 */
@Schema({ timestamps: true, collection: 'doctors' })
export class Doctor {
  /**
   * firstName
   */
  @Prop({ type: String })
  firstName: string;

  /**
   * secondName
   */
  @Prop({ type: String })
  secondName: string;

  /**
   * firstLastName
   */
  @Prop({ type: String })
  firstLastName: string;

  /**
   * secondLastName
   */
  @Prop({ type: String })
  secondLastName: string;

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
