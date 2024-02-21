import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserRequestDto } from '../user/dto/request/user/userRequest.dto';

export type sessionDocument = HydratedDocument<Session>;

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
   * userInfo
   */
  @Prop({ type: UserRequestDto })
  userInfo: UserRequestDto;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
