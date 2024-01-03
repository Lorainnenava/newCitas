import { Injectable } from '@nestjs/common';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesFindOneService } from '../../../domain/interfaces/service/invoices/FindOne/IInvoicesFindOneService';

@Injectable()
export class InvoiceFindOneService implements IInvoicesFindOneService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * findOne invoice
   * @param code
   * @returns
   */
  async findOne(code: number): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.findOne(code);
    } catch (error) {
      throw error;
    }
  }
}
