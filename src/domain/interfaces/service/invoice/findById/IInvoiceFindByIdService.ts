import { InvoiceResponseDto } from '../../../../dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoiceFindByIdService {
  /**
   * findById invoice
   * @param _id
   */
  findById(_id: string): Promise<InvoiceResponseDto>;
}
