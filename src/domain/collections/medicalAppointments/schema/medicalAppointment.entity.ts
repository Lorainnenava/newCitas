import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DoctorRequestDto } from '../../doctors/dto/request/doctorRequest.dto';

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
  @Prop({ type: DoctorRequestDto })
  doctor: DoctorRequestDto;

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
   * cancelled
   */
  @Prop({ type: Boolean, default: false })
  cancelled: boolean;

  /**
   * state
   */
  @Prop({ type: Boolean, default: false })
  state: boolean;
}

export const MedicalAppointmentSchema =
  SchemaFactory.createForClass(MedicalAppointment);
