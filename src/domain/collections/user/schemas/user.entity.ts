import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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
   * _idtypeOfDocument
   */
  @Prop({ type: String })
  _idtypeOfDocument: string;

  /**
   * identificacion
   */
  @Prop({ type: Number })
  identificacion: number;

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
  @Prop({ type: String })
  role: string;
}

export const userSchema = SchemaFactory.createForClass(User);
