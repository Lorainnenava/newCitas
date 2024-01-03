import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesFindByIdService } from '../../../domain/interfaces/service/invoices/findById/IInvoicesFindByIdService';

@Injectable()
export class InvoiceFindByIdService implements IInvoicesFindByIdService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * findById invoice
   * @param _id
   * @returns
   */
  async findById(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    try {
      const searchInvoice = await this.invoiceRepository.findById(_id);
      if (searchInvoice === null) {
        throw new NotFoundException('This invoice does not exist');
      }
      return searchInvoice;
    } catch (error) {
      throw error;
    }
  }
}
