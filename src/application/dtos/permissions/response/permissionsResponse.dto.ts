import { ApiProperty } from '@nestjs/swagger';

export class PermissionsResponseDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  module: string;

  @ApiProperty()
  subModule: string;
}
