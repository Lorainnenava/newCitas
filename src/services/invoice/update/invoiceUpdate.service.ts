import { Inject, Injectable } from '@nestjs/common';
import { InvoiceRequestDto } from 'src/domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoiceUpdateService } from 'src/domain/interfaces/services/invoice/update/IInvoicesUpdateService';

@Injectable()
export class InvoiceUpdateService implements IInvoiceUpdateService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

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
      return await this._invoiceRepository.update({ _id }, request);
    } catch (error) {
      throw error;
    }
  }
}
