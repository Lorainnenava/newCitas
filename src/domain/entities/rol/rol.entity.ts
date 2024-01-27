import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type rolDocument = HydratedDocument<Rol>;

/**
 * Schema Rol
 */
@Schema({ timestamps: true, collection: 'roles' })
export class Rol {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;
}

export const RolSchema = SchemaFactory.createForClass(Rol);
