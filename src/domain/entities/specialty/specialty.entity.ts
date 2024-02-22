import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SpecialtyDocument = HydratedDocument<Specialty>;

/**
 * Schema Specialty
 */
@Schema({ timestamps: true, collection: 'specialties' })
export class Specialty {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;
}

export const SpecialtySchema = SchemaFactory.createForClass(Specialty);
