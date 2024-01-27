import { Injectable, Body } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceUpdateService } from '../../../domain/interfaces/service/invoice/update/IInvoicesUpdateService';
import { InvoiceResponseDto } from '../../../domain/dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRequestDto } from '../../../domain/dtos/invoice/request/invoice/invoiceRequest.dto';

@Injectable()
export class InvoiceUpdateService implements IInvoiceUpdateService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * update invoice
   * @param request
   * @returns
   */
  async update(
    @Body() request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}
