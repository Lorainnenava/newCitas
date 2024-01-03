import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { MedicalHistoryCreateService } from '../../../application/services/medicalHistory/medicalHistoryCreate.service';
import { MedicalHistoryUpdateService } from './../../../application/services/medicalHistory/medicalHistoryUpdate.service';
import { MedicalHistoryGetAllService } from './../../../application/services/medicalHistory/medicalHistoryGetAll.service';
import { MedicalHistoryFindByIdService } from '../../../application/services/medicalHistory/medicalHistoryFindById.service';
import { MedicalHistoryRequestDto } from '../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

@ApiTags('MedicalHistory')
@Controller('medicalHistory')
export class MedicalHistoryController {
  constructor(
    private readonly medicalHistoryCreateService: MedicalHistoryCreateService,
    private readonly medicalHistoryGetAllService: MedicalHistoryGetAllService,
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
  async create(@Body() request: MedicalHistoryRequestDto): Promise<object> {
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
    return this.medicalHistoryGetAllService.getAll();
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
    return this.medicalHistoryFindByIdService.findById(_id);
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
    return this.medicalHistoryUpdateService.update(request, _id);
  }
}
