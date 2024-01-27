import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { SubModulesRequestDto } from '../subModules/subModulesRequest.dto';

/**
 * class ModuleRequestDto
 */
export class ModuleRequestDto {
  @ApiProperty()
  _id?: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: [SubModulesRequestDto] })
  @IsArray()
  @IsNotEmpty()
  subModule: SubModulesRequestDto[];
}
