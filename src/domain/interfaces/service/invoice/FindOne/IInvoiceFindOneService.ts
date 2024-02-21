import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceFindOneService {
  /**
   * findOne invoice
   * @param code
   */
  findOne(code: number): Promise<InvoiceResponseDto>;
}
