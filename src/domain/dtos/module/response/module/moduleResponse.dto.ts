import { ApiProperty } from '@nestjs/swagger';
import { SubModulesResponseDto } from '../subModules/subModulesResponse.dto';
import { Types } from 'mongoose';

/**
 * class ModuleResponseDto
 */
export class ModuleResponseDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [SubModulesResponseDto] })
  subModule: SubModulesResponseDto[];
}
