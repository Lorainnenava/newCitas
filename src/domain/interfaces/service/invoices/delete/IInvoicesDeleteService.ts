import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesDeleteService {
  /**
   * delete invoice
   * @param _id
   */
  delete(_id: string): Promise<InvoiceResponseDto>;
}
