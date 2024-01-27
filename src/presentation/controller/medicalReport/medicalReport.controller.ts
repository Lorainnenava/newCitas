import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { MedicalReportCreateService } from '../../../application/services/medicalReport/medicalReportCreate.service';
import { MedicalReportsGetAllService } from './../../../application/services/medicalReport/medicalReportGetAll.service';
import { MedicalReportFindByIdService } from '../../../application/services/medicalReport/medicalReportFindById.service';
import { MedicalReportResponseDto } from '../../../domain/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';
import { MedicalReportRequestDto } from '../../../domain/dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';

@ApiTags('MedicalReport')
@Controller('medicalReport')
export class MedicalReportController {
  constructor(
    private readonly medicalReportCreateService: MedicalReportCreateService,
    private readonly medicalReportFindByIdService: MedicalReportFindByIdService,
    private readonly medicalReportsGetAllService: MedicalReportsGetAllService,
  ) {}

  /**
   * create MedicalReport
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN || Role.DOCTOR)
  async create(
    @Body() request: MedicalReportRequestDto,
  ): Promise<MedicalReportResponseDto> {
    return this.medicalReportCreateService.create(request);
  }

  /**
   * findById MedicalReport
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  @Roles(Role.ADMIN || Role.DOCTOR)
  async findById(@Param('_id') _id: string): Promise<MedicalReportResponseDto> {
    return this.medicalReportFindByIdService.findById(_id);
  }

  /**
   * getAll MedicalReport
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  @Roles(Role.ADMIN || Role.DOCTOR)
  async getAll(): Promise<MedicalReportResponseDto[]> {
    return this.medicalReportsGetAllService.getAll();
  }
}
