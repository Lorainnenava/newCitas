import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { MedicalHistoryCreateService } from '../../../application/services/medicalHistory/medicalHistoryCreate.service';
import { MedicalHistoryUpdateService } from './../../../application/services/medicalHistory/medicalHistoryUpdate.service';
import { MedicalHistoriesGetAllService } from '../../../application/services/medicalHistory/medicalHistoriesGetAll.service';
import { MedicalHistoryFindByIdService } from '../../../application/services/medicalHistory/medicalHistoryFindById.service';
import { MedicalHistoryResponseDto } from '../../../domain/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';
import { MedicalHistoryRequestDto } from '../../../domain/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';

@ApiTags('MedicalHistory')
@Controller('medicalHistory')
export class MedicalHistoryController {
  constructor(
    private readonly medicalHistoryCreateService: MedicalHistoryCreateService,
    private readonly medicalHistoriesGetAllService: MedicalHistoriesGetAllService,
    private readonly medicalHistoryUpdateService: MedicalHistoryUpdateService,
    private readonly medicalHistoryFindByIdService: MedicalHistoryFindByIdService,
  ) {}

  /**
   * create medicalHistory
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN || Role.DOCTOR)
  async create(
    @Body() request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    return this.medicalHistoryCreateService.create(request);
  }

  /**
   * getAll medicalHistory
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  @Roles(Role.ADMIN || Role.DOCTOR || Role.RECEPCIONISTA)
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    return this.medicalHistoriesGetAllService.getAll();
  }

  /**
   * findById medicalHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  @Roles(Role.ADMIN || Role.DOCTOR || Role.RECEPCIONISTA)
  async findById(
    @Param('_id') _id: string,
  ): Promise<MedicalHistoryResponseDto> {
    return this.medicalHistoryFindByIdService.findById(_id);
  }

  /**
   * update medicalHistory
   * @returns
   */
  @Roles(Role.ADMIN || Role.DOCTOR)
  @ApiBearerAuth('token')
  @Put('/update')
  async update(
    @Body() request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    return this.medicalHistoryUpdateService.update(request);
  }
}
