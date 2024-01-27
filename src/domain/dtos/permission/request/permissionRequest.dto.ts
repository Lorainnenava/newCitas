import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PermissionRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  module: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  subModule: string;
}
