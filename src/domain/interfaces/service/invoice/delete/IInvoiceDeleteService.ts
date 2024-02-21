import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceDeleteService {
  /**
   * delete invoice
   * @param _id
   */
  delete(_id: string): Promise<InvoiceResponseDto>;
}
