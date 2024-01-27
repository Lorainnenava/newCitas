import { InvoiceRequestDto } from '../../../../dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoiceCreateService {
  /**
   * create invoice
   * @param request
   */
  create(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;
}
