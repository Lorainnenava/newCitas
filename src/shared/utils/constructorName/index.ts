import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorNameService {
  // Construye el nombre completo
  async constructorName(values: string[]): Promise<string> {
    return values?.filter((x) => !!x)?.join(' ');
  }
}
