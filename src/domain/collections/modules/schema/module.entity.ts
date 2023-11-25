import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SubModuleRequestDto } from '../dto/request/subModules/subModuleRequest.dto';

export type moduleDocument = HydratedDocument<Modules>;

/**
 * Schema Module
 */
@Schema({ timestamps: true, collection: 'modules' })
export class Modules {
  /**
   * name
   */
  @Prop({ type: String })
  name: string;

  /**
   * subModule
   */
  @Prop({ type: SubModuleRequestDto })
  subModule: SubModuleRequestDto;
}

export const ModuleSchema = SchemaFactory.createForClass(Modules);
