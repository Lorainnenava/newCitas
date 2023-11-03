import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.entity';

export type sessionDocument = HydratedDocument<Session>;
const mySchema = mongoose.Schema;

/**
 * Schema Session
 */
@Schema({ timestamps: true, collection: 'sessions' })
export class Session {
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
  @Prop({ type: String })
  role: string;

  /**
   * _idUser
   */
  @Prop({ type: mySchema.Types.ObjectId, ref: 'User' })
  _idUser: User;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
