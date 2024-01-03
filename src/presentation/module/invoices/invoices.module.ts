import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Invoice,
  InvoiceSchema,
} from '../../../domain/entities/invoice/invoice.entity';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { InvoiceCreateService } from '../../../application/services/invoices/invoicesCreate.service';
import { InvoicesController } from '../../../infrastructure/controller/invoices/invoices.controller';
import { InvoiceDeleteService } from '../../../application/services/invoices/invoicesDelete.service';
import { InvoiceGetAllService } from '../../../application/services/invoices/invoicesGetAll.service';
import { InvoiceUpdateService } from '../../../application/services/invoices/invoicesUpdate.service';
import { InvoiceFindOneService } from '../../../application/services/invoices/invoicesFindOne.service';
import { InvoiceFindByIdService } from '../../../application/services/invoices/invoicesFindById.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  providers: [
    InvoiceRepository,
    InvoiceCreateService,
    InvoiceDeleteService,
    InvoiceFindByIdService,
    InvoiceFindOneService,
    InvoiceGetAllService,
    InvoiceUpdateService,
  ],
  exports: [
    InvoiceCreateService,
    InvoiceDeleteService,
    InvoiceFindByIdService,
    InvoiceFindOneService,
    InvoiceGetAllService,
    InvoiceUpdateService,
    MongooseModule,
  ],
  controllers: [InvoicesController],
})
export class InvoiceModule {}
