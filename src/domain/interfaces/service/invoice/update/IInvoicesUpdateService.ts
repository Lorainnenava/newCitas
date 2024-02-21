import { InvoiceRequestDto } from '../../../../entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceUpdateService {
  /**
   * update invoice
   * @param request
   */
  update(_id: string, request: InvoiceRequestDto): Promise<InvoiceResponseDto>;
}
