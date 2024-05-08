import { Inject, Injectable } from '@nestjs/common';
import { InvoiceRequestDto } from 'src/domain/entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoiceCreateService } from 'src/domain/interfaces/services/invoice/create/IInvoiceCreateService';

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
