import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceFindByIdService } from '../../../../domain/interfaces/service/invoice/findById/IInvoiceFindByIdService';

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
