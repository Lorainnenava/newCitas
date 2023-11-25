import { InvoiceRequestDto } from '../../collections/invoice/dto/request/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../collections/invoice/dto/response/invoiceResponse.dto';

export interface IInvoicesApplication {
  /**
   * create invoice
   * @param request
   */
  create(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;

  /**
   * getAll invoices
   */
  getAll(): Promise<InvoiceResponseDto[]>;

  /**
   * update invoice
   * @param _id
   */
  update(request: InvoiceRequestDto, _id: string): Promise<InvoiceResponseDto>;
}
