import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../user/dto/request/document/documentInfoRequest.dto';
import { AddressRequestDto } from './dto/request/address/addressRequest.dto';

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
  @Prop({ type: String, default: null })
  secondName: string;

  /**
   * firstSurname
   */
  @Prop({ type: String })
  firstLastName: string;

  /**
   * secondSurname
   */
  @Prop({ type: String, default: null })
  secondLastName: string;

  /**
   * dateOfBirth
   */
  @Prop({ type: Date })
  dateOfBirth: Date;

  /**
   * placeOfBirth
   */
  @Prop({ type: String, default: null })
  placeOfBirth: string;

  /**
   * gender
   */
  @Prop({ type: String, default: null })
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
  @Prop({ type: Number, default: null })
  mobileNumber: number;

  /**
   * address
   */
  @Prop({ type: AddressRequestDto, default: null })
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

export const PatientSchema = SchemaFactory.createForClass(Patient);
