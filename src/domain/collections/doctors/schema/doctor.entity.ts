import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
   * specialty
   */
  @Prop({ type: String })
  specialty: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
