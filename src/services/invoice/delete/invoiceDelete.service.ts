import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InvoiceResponseDto } from 'src/domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceRepository } from 'src/domain/interfaces/infrastructure/invoice/IInvoice.repository';
import { IInvoiceDeleteService } from 'src/domain/interfaces/services/invoice/delete/IInvoiceDeleteService';

@Injectable()
export class InvoiceDeleteService implements IInvoiceDeleteService {
  constructor(
    @Inject('InvoiceRepository')
    private readonly _invoiceRepository: IInvoiceRepository,
  ) {}

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<InvoiceResponseDto> {
    try {
      const deleteInvoices = await this._invoiceRepository.delete({ _id });
      if (deleteInvoices === null)
        throw new NotFoundException('This invoice does not exist');
      return deleteInvoices;
    } catch (error) {
      throw error;
    }
  }
}
