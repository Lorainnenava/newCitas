import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceDeleteService } from '../../../domain/interfaces/service/invoice/delete/IInvoiceDeleteService';
import { InvoiceResponseDto } from '../../../domain/dtos/invoice/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceDeleteService implements IInvoiceDeleteService {
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
