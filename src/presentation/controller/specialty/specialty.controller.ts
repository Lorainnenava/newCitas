import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SpecialtiesGetAllService } from '../../../application/services/specialty/getAll/specialtiesGetAll.service';
import { SpecialtyCreateService } from '../../../application/services/specialty/create/specialtyCreate.service';
import { SpecialtyRequestDto } from '../../../domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/entities/specialty/dto/response/specialtyResponse.dto';

@ApiTags('Specialty')
@Controller('specialty')
export class SpecialtyController {
  constructor(
    private readonly specialtyCreateService: SpecialtyCreateService,
    private readonly specialtiesGetAllService: SpecialtiesGetAllService,
  ) {}

  /**
   * create specialty
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(
    @Body() request: SpecialtyRequestDto,
  ): Promise<SpecialtyResponseDto> {
    return this.specialtyCreateService.create(request);
  }

  /**
   * getAll specialties
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<SpecialtyResponseDto[]> {
    return this.specialtiesGetAllService.getAll();
  }
}
