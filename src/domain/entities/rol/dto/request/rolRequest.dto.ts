import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Class RolRequestDto
 */
export class RolRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
