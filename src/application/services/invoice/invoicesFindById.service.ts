import { Injectable, NotFoundException } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceFindByIdService } from '../../../domain/interfaces/service/invoice/findById/IInvoiceFindByIdService';
import { InvoiceResponseDto } from '../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceFindByIdService implements IInvoiceFindByIdService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * findById invoice
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<InvoiceResponseDto> {
    try {
      const searchInvoice = await this.invoiceRepository.findOne({ _id });
      if (searchInvoice === null) {
        throw new NotFoundException('This invoice does not exist');
      }
      return searchInvoice;
    } catch (error) {
      throw error;
    }
  }
}
