import { ApiProperty } from '@nestjs/swagger';

/**
 * class SubModulesResponseDto
 */
export class SubModulesResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;
}
