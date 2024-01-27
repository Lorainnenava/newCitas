import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type permissionsDocument = HydratedDocument<Permission>;

/**
 * Schema Permission
 */
@Schema({ timestamps: true, collection: 'permissions' })
export class Permission {
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

export const PermissionSchema = SchemaFactory.createForClass(Permission);
