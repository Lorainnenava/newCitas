import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/guards/roles/role.enum';
import { Roles } from 'src/shared/guards/roles/roles';
import { MedicalReportCreateService } from '../../../application/services/medicalReport/create/medicalReportCreate.service';
import { MedicalReportFindByIdService } from '../../../application/services/medicalReport/findById/medicalReportFindById.service';
import { MedicalReportsGetAllService } from '../../../application/services/medicalReport/getAll/medicalReportGetAll.service';
import { MedicalReportRequestDto } from '../../../domain/entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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
