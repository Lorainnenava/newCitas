import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SubModulesRequestDto } from './dto/request/subModules/subModulesRequest.dto';

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
  @Prop({ type: SubModulesRequestDto })
  subModule: SubModulesRequestDto;
}

export const ModuleSchema = SchemaFactory.createForClass(Modules);
