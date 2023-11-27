import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
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
   * findById invoice
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/:_id')
  async findById(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    return this.invoicesService.findById(_id);
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

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  @ApiBearerAuth('token')
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    return this.invoicesService.delete(_id);
  }
}
