import { ApiProperty } from '@nestjs/swagger';

export class PermissionResponseDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  module: string;

  @ApiProperty()
  subModule: string;
}
