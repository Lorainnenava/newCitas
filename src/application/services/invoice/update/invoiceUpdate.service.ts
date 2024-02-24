import { Inject, Injectable } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceRequestDto } from '../../../../domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceUpdateService } from '../../../../domain/interfaces/service/invoice/update/IInvoicesUpdateService';

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
