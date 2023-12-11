import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressRequestDto } from '../dto/request/address/addressRequest.dto';
import { DocumentInfoRequestDto } from '../../user/dto/request/document/documentInfoRequest.dto';

export type patientDocument = HydratedDocument<Patients>;

/**
 * Schema Patients
 */
@Schema({ timestamps: true, collection: 'patients' })
export class Patients {
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

export const patientSchema = SchemaFactory.createForClass(Patients);
