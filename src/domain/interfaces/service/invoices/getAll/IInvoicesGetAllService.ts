import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesGetAllService {
  /**
   * getAll invoices
   */
  getAll(): Promise<InvoiceResponseDto[]>;
}
