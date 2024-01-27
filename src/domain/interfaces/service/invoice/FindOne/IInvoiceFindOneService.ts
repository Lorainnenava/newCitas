import { InvoiceResponseDto } from '../../../../dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoiceFindOneService {
  /**
   * findOne invoice
   * @param code
   */
  findOne(code: number): Promise<InvoiceResponseDto>;
}
