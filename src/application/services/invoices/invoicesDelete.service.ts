import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { InvoiceResponseDto } from '../../dtos/invoice/response/invoice/invoiceResponse.dto';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoicesDeleteService } from '../../../domain/interfaces/service/invoices/delete/IInvoicesDeleteService';

@Injectable()
export class InvoiceDeleteService implements IInvoicesDeleteService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<InvoiceResponseDto> {
    try {
      const deleteInvoices = await this.invoiceRepository.delete(_id);
      if (deleteInvoices === null)
        throw new NotFoundException('This invoice does not exist');
      return deleteInvoices;
    } catch (error) {
      throw error;
    }
  }
}
