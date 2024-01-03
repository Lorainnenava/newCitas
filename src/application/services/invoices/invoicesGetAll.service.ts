import { Injectable } from '@nestjs/common';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesGetAllService } from '../../../domain/interfaces/service/invoices/getAll/IInvoicesGetAllService';

@Injectable()
export class InvoiceGetAllService implements IInvoicesGetAllService {
  constructor(private readonly invoicesRepository: InvoiceRepository) {}

  /**
   * getAll invoices
   * @returns
   */
  async getAll(): Promise<InvoiceResponseDto[]> {
    try {
      return await this.invoicesRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
