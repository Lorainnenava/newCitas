import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../../dtos/user/request/document/documentInfoRequest.dto';
import { AddressRequestDto } from '../../dtos/patient/request/address/addressRequest.dto';

export type patientDocument = HydratedDocument<Patient>;

/**
 * Schema Patient
 */
@Schema({ timestamps: true, collection: 'patients' })
export class Patient {
  /**
   * firstName
   */
  @Prop({ type: String })
  firstName: string;

  /**
   * secondName
   */
  @Prop({ type: String, required: false })
  secondName: string;

  /**
   * firstSurname
   */
  @Prop({ type: String })
  firstLastName: string;

  /**
   * secondSurname
   */
  @Prop({ type: String, required: false })
  secondLastName: string;

  /**
   * dateOfBirth
   */
  @Prop({ type: String })
  dateOfBirth: string;

  /**
   * placeOfBirth
   */
  @Prop({ type: String })
  placeOfBirth: string;

  /**
   * gender
   */
  @Prop({ type: String })
  gender: string;

  /**
   * age
   */
  @Prop({ type: Number })
  age: number;

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
   * mobileNumber
   */
  @Prop({ type: Number })
  mobileNumber: number;

  /**
   * address
   */
  @Prop({ type: AddressRequestDto })
  address: AddressRequestDto;

  /**
   * regimen
   */
  @Prop({ type: String })
  regimen: string;

  /**
   * state
   */
  @Prop({ type: Boolean, default: true })
  state: boolean;
}

export const patientSchema = SchemaFactory.createForClass(Patient);
