import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Req, Get, Param, Put } from '@nestjs/common';
import { MedicalAppointmentService } from '../../../application/medicalAppointment/medicalAppointment.service';
import { MedicalAppointmentRequestDto } from '../../../domain/collections/medicalAppointments/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { RequestUser } from '../../../utils/types';

@ApiTags('MedicalAppointment')
@Controller('medicalAppointment')
export class MedicalAppointmentController {
  constructor(
    private readonly medicalAppointmentService: MedicalAppointmentService,
  ) {}

  /**
   * create Medical Appointment
   * @param requestMedicalAppointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(
    @Body() requestMedicalAppointment: MedicalAppointmentRequestDto,
    @Req() request: Request,
  ): Promise<object> {
    const user = request['user'] as RequestUser;
    return this.medicalAppointmentService.create(
      requestMedicalAppointment,
      user,
    );
  }

  /**
   * getAllById Medical Appointment
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAllById/:_id')
  async getAllById(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.medicalAppointmentService.getAllById(user);
  }

  /**
   * getAllBySpecialty
   * @param specialty
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAllBySpecialty/:_id')
  async getAllBySpecialty(
    @Req() specialty: string,
  ): Promise<MedicalAppointmentResponseDto[]> {
    return this.medicalAppointmentService.getAllBySpecialty(specialty);
  }

  /**
   * update Medical Appointment
   * @param request
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: MedicalAppointmentRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    return this.medicalAppointmentService.update(request, _id);
  }
}
