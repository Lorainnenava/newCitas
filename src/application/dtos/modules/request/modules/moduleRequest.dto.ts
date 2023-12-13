import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { SubModuleRequestDto } from '../subModules/subModuleRequest.dto';

/**
 * class ModuleRequestDto
 */
export class ModuleRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: [SubModuleRequestDto] })
  @IsArray()
  @IsNotEmpty()
  subModule: SubModuleRequestDto[];
}
