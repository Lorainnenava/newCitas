import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Class RolesRequestDto
 */
export class RolesRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
