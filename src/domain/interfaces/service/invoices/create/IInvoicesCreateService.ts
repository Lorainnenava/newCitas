import { InvoiceRequestDto } from '../../../../../application/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

export interface IInvoicesCreateService {
  /**
   * create invoice
   * @param request
   */
  create(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;
}
