import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MedicalHistoryService } from '../../../application/medicalHistory/medicalHistory.service';
import { MedicalHistoryRequestDto } from '../../../domain/collections/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/collections/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

@ApiTags('MedicalHistory')
@Controller('MedicalHistory')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  /**
   * create medicalHistory
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(@Body() request: MedicalHistoryRequestDto): Promise<object> {
    return this.medicalHistoryService.create(request);
  }

  /**
   * getAll medicalHistory
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/GetAll')
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    return this.medicalHistoryService.getAll();
  }

  /**
   * findById medicalHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  async findById(@Param('_id') _id: string): Promise<object> {
    return this.medicalHistoryService.findById(_id);
  }

  /**
   * update medicalHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: MedicalHistoryRequestDto,
    @Param('_id') _id: string,
  ): Promise<object> {
    return this.medicalHistoryService.update(request, _id);
  }
}
