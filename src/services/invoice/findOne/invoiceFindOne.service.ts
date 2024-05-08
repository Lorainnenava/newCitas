import { Inject, Injectable } from '@nestjs/common';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoiceFindOneService } from 'src/domain/interfaces/services/invoice/FindOne/IInvoiceFindOneService';

@Injectable()
export class InvoiceFindOneService implements IInvoiceFindOneService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

  /**
   * findOne invoice
   * @param code
   * @returns
   */
  async findOne(code: number): Promise<InvoiceResponseDto> {
    try {
      return await this._invoiceRepository.findOne({ code: Number(code) });
    } catch (error) {
      throw error;
    }
  }
}
