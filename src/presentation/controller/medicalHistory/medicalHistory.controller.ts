import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/guards/roles/role.enum';
import { Roles } from 'src/shared/guards/roles/roles';
import { MedicalHistoryCreateService } from '../../../application/services/medicalHistory/create/medicalHistoryCreate.service';
import { MedicalHistoryFindByIdService } from '../../../application/services/medicalHistory/findById/medicalHistoryFindById.service';
import { MedicalHistoriesGetAllService } from '../../../application/services/medicalHistory/getAll/medicalHistoriesGetAll.service';
import { MedicalHistoryUpdateService } from '../../../application/services/medicalHistory/update/medicalHistoryUpdate.service';
import { MedicalHistoryRequestDto } from '../../../domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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
