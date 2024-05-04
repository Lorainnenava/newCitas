import { Inject, Injectable } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceRequestDto } from '../../../../domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceCreateService } from '../../../../domain/interfaces/service/invoice/create/IInvoiceCreateService';

@Injectable()
export class InvoiceCreateService implements IInvoiceCreateService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

  /**
   * create Invoice
   * @param request
   */
  async create(request: InvoiceRequestDto): Promise<InvoiceResponseDto> {
    try {
      return await this._invoiceRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}
