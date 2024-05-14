import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { DocumentInfoRequestDto } from './dto/request/document/documentInfoRequest.dto';

export type userDocument = HydratedDocument<User>;

/**
 * Schema User
 */
@Schema({ timestamps: true, collection: 'users' })
export class User {
  /**
   * email
   */
  @Prop({ type: String })
  email: string;

  /**
   * documentInfo
   */
  @Prop({ type: DocumentInfoRequestDto })
  documentInfo: DocumentInfoRequestDto;

  /**
   * password
   */
  @Prop({ type: String, default: null })
  password: string;

  /**
   * token
   */
  @Prop({ type: String, default: null })
  token: string;

  /**
   * role
   */
  @Prop({ type: String })
  role: string;

  /**
   * state
   */
  @Prop({ type: Boolean, default: false })
  state: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);
