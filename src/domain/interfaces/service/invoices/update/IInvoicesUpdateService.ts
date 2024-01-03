import { InvoiceRequestDto } from '../../../../../application/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesUpdateService {
  /**
   * update invoice
   * @param _id
   */
  update(request: InvoiceRequestDto, _id: string): Promise<InvoiceResponseDto>;
}
