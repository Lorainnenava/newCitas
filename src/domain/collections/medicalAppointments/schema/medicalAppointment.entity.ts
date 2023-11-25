import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type medicalAppointmentDocument = HydratedDocument<MedicalAppointment>;

/**
 * Schema MedicalAppointment
 */
@Schema({ timestamps: true, collection: 'medicalAppointments' })
export class MedicalAppointment {
  /**
   * userInfo
   */
  @Prop({ type: Object })
  userInfo: object;

  /**
   * specialty
   */
  @Prop({ type: String })
  specialty: string;

  /**
   * timeAppointment
   */
  @Prop({ type: String })
  timeAppointment: string;

  /**
   * doctor
   */
  @Prop({ type: String })
  doctor: string;

  /**
   * date
   */
  @Prop({ type: Date })
  date: Date;

  /**
   * statusAppointment
   */
  @Prop({ type: Boolean })
  statusAppointment: boolean;

  /**
   * state
   */
  @Prop({ type: Boolean, default: false })
  state: boolean;
}

export const MedicalAppointmentSchema =
  SchemaFactory.createForClass(MedicalAppointment);
