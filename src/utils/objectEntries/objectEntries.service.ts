import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectEntriesService {
  async omitPropertiesFromObject(
    object: Object,
    propertiesToOmit: string[],
  ): Promise<Object> {
    return Object.fromEntries(
      Object.entries(object).filter(([key]) => !propertiesToOmit.includes(key)),
    );
  }
}
