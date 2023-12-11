import { Injectable } from '@nestjs/common';

@Injectable()
export class DescriptionService {
  async createDescription(data: string): Promise<string> {
    const specialties = ['MEDICINA GENERAL', 'ODONTOLOGIA', 'NUTRICIÓN'];
    for (const specialty of specialties) {
      if (specialty === data) {
        return `CITA DE ${specialty}`;
      }
    }
  }
}
