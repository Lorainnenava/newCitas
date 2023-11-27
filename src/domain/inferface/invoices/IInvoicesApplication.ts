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
   * findById invoice
   * @param _id
   */
  findById(_id: string): Promise<InvoiceResponseDto>;

  /**
   * delete invoice
   * @param _id
   */
  delete(_id: string): Promise<InvoiceResponseDto>;

  /**
   * update invoice
   * @param _id
   */
  update(request: InvoiceRequestDto, _id: string): Promise<InvoiceResponseDto>;
}
