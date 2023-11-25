import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Invoice,
  InvoiceSchema,
} from '../../../domain/collections/invoice/schema/invoice.entity';
import { InvoiceService } from '../../../application/invoices/invoices.service';
import { InvoicesController } from '../../controller/invoices/invoices.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  providers: [InvoiceService],
  exports: [InvoiceService],
  controllers: [InvoicesController],
})
export class InvoiceModule {}
