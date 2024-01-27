import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Invoice,
  InvoiceSchema,
} from '../../../domain/entities/invoice/invoice.entity';
import { InvoiceRepository } from '../../../infrastructure/repository/invoice/invoice.repository';
import { InvoiceCreateService } from '../../../application/services/invoice/invoiceCreate.service';
import { InvoiceDeleteService } from '../../../application/services/invoice/invoiceDelete.service';
import { InvoiceFindByIdService } from '../../../application/services/invoice/invoicesFindById.service';
import { InvoiceFindOneService } from '../../../application/services/invoice/invoiceFindOne.service';
import { InvoicesGetAllService } from '../../../application/services/invoice/invoicesGetAll.service';
import { InvoiceUpdateService } from '../../../application/services/invoice/invoiceUpdate.service';
import { InvoiceController } from '../../controller/invoice/invoice.controller';

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
    MongooseModule,
  ],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
