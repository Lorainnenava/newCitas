import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { MedicalReportService } from '../../../application/medicalReport/medicalReport.service';
import { MedicalReportRequestDto } from '../../../domain/collections/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../domain/collections/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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
  @Roles(Role.ADMIN || Role.DOCTOR)
  async create(@Body() request: MedicalReportRequestDto): Promise<object> {
    return this.medicalReportService.create(request);
  }

  /**
   * findById MedicalReport
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  @Roles(Role.ADMIN || Role.DOCTOR)
  async findById(@Param('_id') _id: string): Promise<MedicalReportResponseDto> {
    return this.medicalReportService.findById(_id);
  }
}
