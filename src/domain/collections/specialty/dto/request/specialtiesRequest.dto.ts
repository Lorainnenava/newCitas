import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Class SpecialtyRequestDto
 */
export class SpecialtyRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
