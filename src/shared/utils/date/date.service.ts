import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  getCurrentDate(): string {
    const date = new Date();
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate().toString().padStart(2, '0');

    const format = `${año}-${mes}-${dia}`;

    // CURRENT DATE
    return format;
  }
}
