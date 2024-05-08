import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoiceFindByIdService } from 'src/domain/interfaces/services/invoice/findById/IInvoiceFindByIdService';

@Injectable()
export class InvoiceFindByIdService implements IInvoiceFindByIdService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

  /**
   * findById invoice
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<InvoiceResponseDto> {
    try {
      const searchInvoice = await this._invoiceRepository.findOne({ _id });
      if (searchInvoice === null) {
        throw new NotFoundException('This invoice does not exist');
      }
      return searchInvoice;
    } catch (error) {
      throw error;
    }
  }
}
