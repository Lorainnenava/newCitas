import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type typeOfDocument = HydratedDocument<TypeOfDocument>;

/**
 * Schema TypeOfDocument
 */
@Schema({ timestamps: true, collection: 'typeOfDocuments' })
export class TypeOfDocument {
  /**
   * typeOfDocument
   */
  @Prop({ type: String })
  typeOfDocument: string;
}

export const typeOfDocumentSchema =
  SchemaFactory.createForClass(TypeOfDocument);
