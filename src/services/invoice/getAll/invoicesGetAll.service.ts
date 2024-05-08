import { Inject, Injectable } from '@nestjs/common';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoicesGetAllService } from 'src/domain/interfaces/services/invoice/getAll/IInvoicesGetAllService';

@Injectable()
export class InvoicesGetAllService implements IInvoicesGetAllService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

  /**
   * getAll invoices
   * @returns
   */
  async getAll(): Promise<InvoiceResponseDto[]> {
    try {
      return await this._invoiceRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
