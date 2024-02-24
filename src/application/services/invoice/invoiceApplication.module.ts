import { Module } from '@nestjs/common';
import { InvoiceCreateService } from './create/invoiceCreate.service';
import { InvoiceDeleteService } from './delete/invoiceDelete.service';
import { InvoiceUpdateService } from './update/invoiceUpdate.service';
import { InvoicesGetAllService } from './getAll/invoicesGetAll.service';
import { InvoiceFindOneService } from './findOne/invoiceFindOne.service';
import { InvoiceFindByIdService } from './findById/invoicesFindById.service';

/**
 * Module for importing invoice services.
 */
@Module({
  providers: [
    InvoiceCreateService,
    InvoiceDeleteService,
    InvoiceFindByIdService,
    InvoiceFindOneService,
    InvoicesGetAllService,
    InvoiceUpdateService,
  ],
  exports: [
    InvoiceCreateService,
    InvoiceDeleteService,
    InvoiceFindByIdService,
    InvoiceFindOneService,
    InvoicesGetAllService,
    InvoiceUpdateService,
  ],
})
export class InvoiceApplicationModule {}
