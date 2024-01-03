import { Injectable, Param, Body } from '@nestjs/common';
import { InvoiceRequestDto } from '../../dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesUpdateService } from '../../../domain/interfaces/service/invoices/update/IInvoicesUpdateService';

@Injectable()
export class InvoiceUpdateService implements IInvoicesUpdateService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * update invoices
   * @param _id
   * @returns
   */
  async update(
    @Body() request: InvoiceRequestDto,
    @Param('_id') _id: string,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.update(request, _id);
    } catch (error) {
      throw error;
    }
  }
}
