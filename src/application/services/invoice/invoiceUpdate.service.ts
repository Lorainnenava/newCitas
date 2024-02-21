import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceUpdateService } from '../../../domain/interfaces/service/invoice/update/IInvoicesUpdateService';
import { InvoiceRequestDto } from '../../../domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceUpdateService implements IInvoiceUpdateService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * update invoice
   * @param request
   * @returns
   */
  async update(
    _id: string,
    request: InvoiceRequestDto,
  ): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.update({ _id }, request);
    } catch (error) {
      throw error;
    }
  }
}
