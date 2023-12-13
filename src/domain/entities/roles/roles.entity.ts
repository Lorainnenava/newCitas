import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type roleDocument = HydratedDocument<Roles>;

/**
 * Schema Role
 */
@Schema({ timestamps: true, collection: 'roles' })
export class Roles {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
