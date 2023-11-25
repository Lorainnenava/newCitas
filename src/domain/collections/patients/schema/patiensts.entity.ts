import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DocumentInfoRequestDto } from '../../user/dto/request/document/documentInfoRequest.dto';
import { AddressRequestDto } from '../dto/request/address/addressRequest.dto';

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
  @Prop({ type: String })
  secondName?: string;

  /**
   * firstSurname
   */
  @Prop({ type: String })
  firstSurname: string;

  /**
   * secondSurname
   */
  @Prop({ type: String })
  secondSurname?: string;

  /**
   * dateOfBirth
   */
  @Prop({ type: Date })
  dateOfBirth: Date;

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
   * phoneNumber
   */
  @Prop({ type: Number })
  phoneNumber: number;

  /**
   * address
   */
  @Prop({ type: AddressRequestDto })
  address: AddressRequestDto;

  /**
   * state
   */
  @Prop({ type: Boolean, default: false })
  state: boolean;
}

export const patientSchema = SchemaFactory.createForClass(Patients);
