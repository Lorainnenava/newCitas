import { Inject, Injectable } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceFindOneService } from '../../../../domain/interfaces/service/invoice/FindOne/IInvoiceFindOneService';

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
