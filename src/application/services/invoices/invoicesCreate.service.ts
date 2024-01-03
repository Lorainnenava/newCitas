import { Injectable, Body } from '@nestjs/common';
import { InvoiceRequestDto } from '../../dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesCreateService } from '../../../domain/interfaces/service/invoices/create/IInvoicesCreateService';

@Injectable()
export class InvoiceCreateService implements IInvoicesCreateService {
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
