import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../../../../infrastructure/repository/invoice/invoice.repository';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoicesGetAllService } from '../../../../domain/interfaces/service/invoice/getAll/IInvoicesGetAllService';

@Injectable()
export class InvoicesGetAllService implements IInvoicesGetAllService {
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
