import { Inject, Injectable } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoicesGetAllService } from '../../../../domain/interfaces/service/invoice/getAll/IInvoicesGetAllService';

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
