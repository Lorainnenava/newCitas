import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoicesGetAllService {
  /**
   * getAll invoices
   */
  getAll(): Promise<InvoiceResponseDto[]>;
}
