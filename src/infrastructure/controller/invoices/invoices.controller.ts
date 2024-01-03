import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InvoiceCreateService } from '../../../application/services/invoices/invoicesCreate.service';
import { InvoiceDeleteService } from '../../../application/services/invoices/invoicesDelete.service';
import { InvoiceGetAllService } from '../../../application/services/invoices/invoicesGetAll.service';
import { InvoiceUpdateService } from '../../../application/services/invoices/invoicesUpdate.service';
import { InvoiceFindByIdService } from '../../../application/services/invoices/invoicesFindById.service';
import { InvoiceRequestDto } from '../../../application/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(
    private readonly invoiceCreateService: InvoiceCreateService,
    private readonly invoiceDeleteService: InvoiceDeleteService,
    private readonly invoiceGetAllService: InvoiceGetAllService,
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
  @Roles(Role.ADMIN || Role.RECEPCIONISTA)
  async getAll(): Promise<InvoiceResponseDto[]> {
    return this.invoiceGetAllService.getAll();
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
   * @param _id
   * @returns
   */
  @Roles(Role.ADMIN || Role.RECEPCIONISTA || Role.PACIENTE)
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: InvoiceRequestDto,
    @Param('_id') _id: string,
  ): Promise<InvoiceResponseDto> {
    return this.invoiceUpdateService.update(request, _id);
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
