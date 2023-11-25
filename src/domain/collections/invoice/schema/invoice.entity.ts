import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PatientRequestDto } from '../../patients/dto/request/patient/patientRequest.dto';

export type doctorDocument = HydratedDocument<Invoice>;

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
   * hospital
   */
  @Prop({ type: String, default: 'Center hospital' })
  hospital: string;

  /**
   * patientInformation
   */
  @Prop({ type: PatientRequestDto })
  patientInformation: PatientRequestDto;

  /**
   * date
   */
  @Prop({ type: Date })
  date: Date;

  /**
   * cost
   */
  @Prop({ type: Number })
  cost: Number;

  /**
   * state
   */
  @Prop({ type: String, default: false })
  state: boolean;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
