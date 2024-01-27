import { InvoiceRequestDto } from '../../../../dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoiceUpdateService {
  /**
   * update invoice
   * @param request
   */
  update(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;
}
