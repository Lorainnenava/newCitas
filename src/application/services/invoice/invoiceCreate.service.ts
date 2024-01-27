import { Injectable, Body } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceCreateService } from '../../../domain/interfaces/service/invoice/create/IInvoiceCreateService';
import { InvoiceRequestDto } from '../../../domain/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/dtos/invoice/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceCreateService implements IInvoiceCreateService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * create Invoice
   * @param request
   */
  async create(
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
