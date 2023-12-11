import { Request } from 'express';
import { Roles } from '../../../utils/roles/roles';
import { RequestUser } from '../../../utils/types';
import { Role } from '../../../utils/roles/role.enum';
import { Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleService } from '../../../application/medicalAppointment/schedule/schedule.service';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@ApiTags('Schedule')
@Controller('Schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  /**
   * create
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/filterByDay')
  @Roles(Role.DOCTOR)
  async filterByDay(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.filterByDay(user);
  }

  /**
   * futureAppointments
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/futureAppointments')
  @Roles(Role.DOCTOR)
  async futureAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.futureAppointments(user);
  }

  /**
   * cancelledAppointments
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/cancelledAppointments')
  @Roles(Role.DOCTOR)
  async cancelledAppointments(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.cancelledAppointments(user);
  }

  /**
   * appointmentHistory
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/appointmentHistory')
  @Roles(Role.DOCTOR)
  async appointmentHistory(
    @Req() request: Request,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const user = request['user'] as RequestUser;
    return this.scheduleService.appointmentHistory(user);
  }
}
