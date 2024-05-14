import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../user/dto/request/document/documentInfoRequest.dto';

export type doctorDocument = HydratedDocument<Doctor>;

/**
 * Schema Doctor
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
  @Prop({ type: String, default: null })
  secondName: string;

  /**
   * firstLastName
   */
  @Prop({ type: String })
  firstLastName: string;

  /**
   * secondLastName
   */
  @Prop({ type: String, default: null })
  secondLastName: string;

  /**
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

  /**
   * email
   */
  @Prop({ type: String })
  email: string;

  /**
   * specialty
   */
  @Prop({ type: String })
  specialty: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
