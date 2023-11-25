import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicalReportService } from '../../../application/medicalReport/medicalReport.service';
import { MedicalReportResponseDto } from '../../../domain/collections/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { MedicalReportRequestDto } from '../../../domain/collections/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';

@ApiTags('MedicalReport')
@Controller('MedicalReport')
export class MedicalReportController {
  constructor(private readonly medicalReportService: MedicalReportService) {}

  /**
   * create MedicalReport
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(@Body() request: MedicalReportRequestDto): Promise<object> {
    return this.medicalReportService.create(request);
  }

  /**
   * findById MedicalReport
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/:_id')
  async findById(@Param('_id') _id: string): Promise<MedicalReportResponseDto> {
    return this.medicalReportService.findById(_id);
  }
}
