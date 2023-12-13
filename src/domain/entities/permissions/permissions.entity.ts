import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type permissionsDocument = HydratedDocument<Permissions>;

/**
 * Schema Permissions
 */
@Schema({ timestamps: true, collection: 'permissions' })
export class Permissions {
  /**
   * role
   */
  @Prop({ type: String })
  role: string;

  /**
   * module
   */
  @Prop({ type: String })
  module: string;

  /**
   * subModule
   */
  @Prop({ type: String })
  subModule: string;
}

export const PermissionsSchema = SchemaFactory.createForClass(Permissions);
