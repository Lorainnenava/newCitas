import { Module } from '@nestjs/common';
import { InvoiceCreateService } from './create/invoiceCreate.service';
import { InvoiceDeleteService } from './delete/invoiceDelete.service';
import { InvoiceFindByIdService } from './findById/invoicesFindById.service';
import { InvoiceFindOneService } from './findOne/invoiceFindOne.service';
import { InvoicesGetAllService } from './getAll/invoicesGetAll.service';
import { InvoiceUpdateService } from './update/invoiceUpdate.service';

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
