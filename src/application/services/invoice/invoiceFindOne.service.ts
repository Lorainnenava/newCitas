import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { IInvoiceFindOneService } from '../../../domain/interfaces/service/invoice/FindOne/IInvoiceFindOneService';
import { InvoiceResponseDto } from '../../../domain/entities/invoice/dto/response/invoice/invoiceResponse.dto';

@Injectable()
export class InvoiceFindOneService implements IInvoiceFindOneService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  /**
   * findOne invoice
   * @param code
   * @returns
   */
  async findOne(code: number): Promise<InvoiceResponseDto> {
    try {
      return await this.invoiceRepository.findOne({ code: Number(code) });
    } catch (error) {
      throw error;
    }
  }
}
