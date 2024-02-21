import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Modules } from '../module/module.entity';

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
   * modules
   */
  @Prop({ type: Modules })
  modules: Modules;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
