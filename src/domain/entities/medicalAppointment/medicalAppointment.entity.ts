import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PatientInformationRequestDto } from '../../dtos/invoice/request/patientInformation/patientInformationRequest.dto';
import { DoctorRequestDto } from '../../dtos/doctor/request/doctorRequest.dto';

export type medicalAppointmentDocument = HydratedDocument<MedicalAppointment>;

/**
 * Schema MedicalAppointment
 */
@Schema({ timestamps: true, collection: 'medicalAppointments' })
export class MedicalAppointment {
  /**
   * userInfo
   */
  @Prop({ type: PatientInformationRequestDto })
  userInfo: PatientInformationRequestDto;

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
  @Prop({ type: String })
  date: string;

  /**
   * cancelled
   */
  @Prop({ type: Boolean, default: false })
  cancelled: boolean;

  /**
   * state
   */
  @Prop({ type: Boolean, default: true })
  state: boolean;
}

export const MedicalAppointmentSchema =
  SchemaFactory.createForClass(MedicalAppointment);
