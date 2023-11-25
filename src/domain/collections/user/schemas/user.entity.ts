import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DocumentInfoRequestDto } from '../dto/request/document/documentInfoRequest.dto';

export type userDocument = HydratedDocument<User>;

/**
 * Schema User
 */
@Schema({ timestamps: true, collection: 'users' })
export class User {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;

  /**
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

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
   * role
   */
  @Prop({ type: String, default: 'user' })
  role: string;
}

export const userSchema = SchemaFactory.createForClass(User);
