import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IInvoiceRepository } from '../../../../domain/interfaces/repository/invoice/IInvoice.repository';
import { InvoiceResponseDto } from '../../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';
import { IInvoiceDeleteService } from '../../../../domain/interfaces/service/invoice/delete/IInvoiceDeleteService';

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
