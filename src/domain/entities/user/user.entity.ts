import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from '../../../application/dtos/user/request/document/documentInfoRequest.dto';

export type userDocument = HydratedDocument<User>;

/**
 * Schema User
 */
@Schema({ timestamps: true, collection: 'users' })
export class User {
  /**
   * firstName
   */
  @Prop({ type: String })
  firstName: string;

  /**
   * secondName
   */
  @Prop({ type: String })
  secondName: string;

  /**
   * firstSurname
   */
  @Prop({ type: String })
  firstLastName: string;

  /**
   * secondLastName
   */
  @Prop({ type: String })
  secondLastName: string;

  /**
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

  /**
   * dateOfBirth
   */
  @Prop({ type: String })
  dateOfBirth: string;

  /**
   * gender
   */
  @Prop({ type: String })
  gender: string;

  /**
   * mobileNumber
   */
  @Prop({ type: Number })
  mobileNumber: number;

  /**
   * email
   */
  @Prop({ type: String })
  email: string;

  /**
   * password
   */
  @Prop({ type: String })
  password: string;

  /**
   * token
   */
  @Prop({ type: String })
  token: string;

  /**
   * role
   */
  @Prop({ type: String, default: 'USER' })
  role: string;

  /**
   * state
   */
  @Prop({ type: Boolean, default: false })
  state: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);
