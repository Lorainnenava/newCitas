import { ApiProperty } from '@nestjs/swagger';
import { SubModuleResponseDto } from '../subModules/subModuleResponse.dto';

/**
 * class ModuleResponseDto
 */
export class ModuleResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: [SubModuleResponseDto] })
  subModule: SubModuleResponseDto[];
}
