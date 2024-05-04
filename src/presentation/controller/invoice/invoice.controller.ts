import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/guards/roles/role.enum';
import { Roles } from 'src/shared/guards/roles/roles';
import { InvoiceCreateService } from '../../../application/services/invoice/create/invoiceCreate.service';
import { InvoiceDeleteService } from '../../../application/services/invoice/delete/invoiceDelete.service';
import { InvoiceFindByIdService } from '../../../application/services/invoice/findById/invoicesFindById.service';
import { InvoicesGetAllService } from '../../../application/services/invoice/getAll/invoicesGetAll.service';
import { InvoiceUpdateService } from '../../../application/services/invoice/update/invoiceUpdate.service';
import { InvoiceRequestDto } from '../../../domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';

@ApiTags('Invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceCreateService: InvoiceCreateService,
    private readonly invoiceDeleteService: InvoiceDeleteService,
    private readonly invoicesGetAllService: InvoicesGetAllService,
    private readonly invoiceUpdateService: InvoiceUpdateService,
    private readonly invoiceFindByIdService: InvoiceFindByIdService,
  ) {}

  /**
   * create invoice
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  async create(
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    return this.invoiceCreateService.create(request);
  }

  /**
   * getAll invoices
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/getAll')
  // @Roles(Role.ADMIN || Role.RECEPCIONISTA)
  async getAll(): Promise<InvoiceResponseDto[]> {
    return this.invoicesGetAllService.getAll();
  }

  /**
   * findById invoice
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  async findById(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    return this.invoiceFindByIdService.findById(_id);
  }

  /**
   * update invoices
   * @returns
   */
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  @ApiBearerAuth('token')
  @Put('/update')
  async update(
    @Param('_id') _id: string,
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    return this.invoiceUpdateService.update(_id, request);
  }

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  async delete(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    return this.invoiceDeleteService.delete(_id);
  }
}
