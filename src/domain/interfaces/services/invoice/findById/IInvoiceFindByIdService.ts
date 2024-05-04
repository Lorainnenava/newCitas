import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceFindByIdService {
  /**
   * findById invoice
   * @param _id
   */
  findById(_id: string): Promise<InvoiceResponseDto>;
}
