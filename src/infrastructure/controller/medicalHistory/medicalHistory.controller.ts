import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { MedicalHistoryService } from '../../../application/services/medicalHistory/medicalHistory.service';
import { MedicalHistoryRequestDto } from '../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

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
  @Roles(Role.ADMIN || Role.DOCTOR)
  async create(@Body() request: MedicalHistoryRequestDto): Promise<object> {
    return this.medicalHistoryService.create(request);
  }

  /**
   * getAll medicalHistory
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/GetAll')
  @Roles(Role.ADMIN || Role.DOCTOR || Role.RECEPCIONISTA)
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
  @Roles(Role.ADMIN || Role.DOCTOR || Role.RECEPCIONISTA)
  async findById(@Param('_id') _id: string): Promise<object> {
    return this.medicalHistoryService.findById(_id);
  }

  /**
   * update medicalHistory
   * @param _id
   * @returns
   */
  @Roles(Role.ADMIN || Role.DOCTOR)
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: MedicalHistoryRequestDto,
    @Param('_id') _id: string,
  ): Promise<object> {
    return this.medicalHistoryService.update(request, _id);
  }
}
