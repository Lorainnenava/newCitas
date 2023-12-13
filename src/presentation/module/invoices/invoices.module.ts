import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Invoice,
  InvoiceSchema,
} from '../../../domain/entities/invoice/invoice.entity';
import { InvoiceService } from '../../../application/services/invoices/invoices.service';
import { InvoicesController } from '../../../infrastructure/controller/invoices/invoices.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  providers: [InvoiceService],
  exports: [InvoiceService, MongooseModule],
  controllers: [InvoicesController],
})
export class InvoiceModule {}
