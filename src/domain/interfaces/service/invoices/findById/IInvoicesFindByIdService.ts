import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesFindByIdService {
  /**
   * findById invoice
   * @param _id
   */
  findById(_id: string): Promise<InvoiceResponseDto>;
}
