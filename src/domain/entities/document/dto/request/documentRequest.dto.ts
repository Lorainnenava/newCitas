import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class DocumentRequestDto {
  @ApiProperty({
    type: 'string',
    format: 'binary', // Esto indica que es un archivo
    description: 'Archivo adjunto',
    required: true,
  })
  @IsDefined()
  @IsNotEmpty()
  file: Express.Multer.File;
}
