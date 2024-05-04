import { InvoiceRequestDto } from '../../../../entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceCreateService {
  /**
   * create invoice
   * @param request
   */
  create(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;
}
