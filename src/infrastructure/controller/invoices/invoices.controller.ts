import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InvoiceService } from '../../../application/invoices/invoices.service';
import { InvoiceRequestDto } from '../../../domain/collections/invoice/dto/request/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/collections/invoice/dto/response/invoiceResponse.dto';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoiceService) {}

  /**
   * create invoice
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  async create(
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    return this.invoicesService.create(request);
  }

  /**
   * getAll invoices
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('/GetAll')
  async getAll(): Promise<InvoiceResponseDto[]> {
    return this.invoicesService.getAll();
  }

  /**
   * update invoices
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Put('/update/:_id')
  async update(
    @Body() request: InvoiceRequestDto,
    @Param('_id') _id: string,
  ): Promise<InvoiceResponseDto> {
    return this.invoicesService.update(request, _id);
  }
}
