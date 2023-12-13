import { InvoiceRequestDto } from '../../../../application/dtos/invoice/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../../application/dtos/invoice/response/invoice/invoiceResponse.dto';

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
   * findOne invoice
   * @param code
   */
  findOne(code: number): Promise<InvoiceResponseDto>;

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
