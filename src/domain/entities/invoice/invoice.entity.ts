import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MedicalAppointment } from '../medicalAppointment/medicalAppointment.entity';
import { PatientInformationRequestDto } from '../../dtos/invoice/request/patientInformation/patientInformationRequest.dto';

export type invoiceDocument = HydratedDocument<Invoice>;

/**
 * Schema Invoice
 */
@Schema({ timestamps: true, collection: 'invoices' })
export class Invoice {
  /**
   * code
   */
  @Prop({ type: Number })
  code: number;

  /**
   * description
   */
  @Prop({ type: String })
  description: string;

  /**
   * patientInformation
   */
  @Prop({ type: PatientInformationRequestDto })
  patientInformation: PatientInformationRequestDto;

  /**
   * _idMedicalAppointment
   */
  @Prop({ type: Types.ObjectId, ref: MedicalAppointment.name })
  _idMedicalAppointment: Types.ObjectId;

  /**
   * date
   */
  @Prop({ type: String })
  date: string;

  /**
   * cost
   */
  @Prop({ type: Number })
  cost: Number;

  /**
   * paid
   */
  @Prop({ type: Boolean, default: false })
  paid: boolean;

  /**
   * state
   */
  @Prop({ type: String, default: false })
  state: boolean;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
