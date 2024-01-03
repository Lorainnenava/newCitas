import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesFindOneService {
  /**
   * findOne invoice
   * @param code
   */
  findOne(code: number): Promise<InvoiceResponseDto>;
}
