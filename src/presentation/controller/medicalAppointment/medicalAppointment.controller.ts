import {
  Req,
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { Request } from 'express';
import { RequestUser } from '../../../utils/types';
import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MedicalAppointmentCreateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentCreate.service';
import { MedicalAppointmentsGetAllService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentsGetAll.service';
import { MedicalAppointmentUpdateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentUpdate.service';
import { MedicalAppointmentDeleteService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentDelete.service';
import { MedicalAppointmentFindByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentFindById.service';
import { MedicalAppointmentGetAllByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentGetAllById.service';
import { MedicalAppointmentRequestDto } from '../../../domain/entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@ApiTags('MedicalAppointment')
@Controller('medicalAppointment')
export class MedicalAppointmentController {
  constructor(
    private readonly medicalAppointmentCreateService: MedicalAppointmentCreateService,
    private readonly medicalAppointmentsGetAllService: MedicalAppointmentsGetAllService,
    private readonly medicalAppointmentUpdateService: MedicalAppointmentUpdateService,
    private readonly medicalAppointmentDeleteService: MedicalAppointmentDeleteService,
    private readonly medicalAppointmentFindByIdService: MedicalAppointmentFindByIdService,
    private readonly medicalAppointmentGetAllByIdService: MedicalAppointmentGetAllByIdService,
  ) {}

  /**
   * create medicalAppointment
   * @param requestMedicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  async create(
    @Body() requestMedicalAppointment: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentCreateService.create(
      requestMedicalAppointment,
    );
  }

  /**
   * getAll medicalAppointments
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE || Role.DOCTOR)
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    return this.medicalAppointmentsGetAllService.getAll();
  }

  /**
   * getAllById medicalAppointments
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAllById')
  @Roles(Role.ADMIN || Role.PACIENTE)
  async getAllById(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.medicalAppointmentGetAllByIdService.getAllById(user);
  }

  /**
   * findById medicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/findById/:_id')
  async findById(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentFindByIdService.findById(_id);
  }

  /**
   * update medicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update')
  async update(
    @Param('_id') _id: string,
    @Body() request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentUpdateService.update(_id, request);
  }

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  async delete(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentDeleteService.delete(_id);
  }
}
