import { ApiProperty } from '@nestjs/swagger';

/**
 * class SubModuleResponseDto
 */
export class SubModuleResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;
}
