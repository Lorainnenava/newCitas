import { InvoiceResponseDto } from '../../../../dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoiceDeleteService {
  /**
   * delete invoice
   * @param _id
   */
  delete(_id: string): Promise<InvoiceResponseDto>;
}
