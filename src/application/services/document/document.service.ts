import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentUploadService {
  constructor() {}

  //asi sirve averigua como crear una carpeta
  async upload(Body: Buffer | ArrayBuffer, key?: string): Promise<string> {
    console.log(key, 'key');
    console.log(Body, 'body');
    try {
      // Extraer el nombre del archivo de la key
      const buffer = Body instanceof ArrayBuffer ? Body : Buffer?.from(Body);

      // Preparar la ruta de destino en ownCloud
      const destinationPath = 'Prueba/6318bca29b145be7196a861d837f4fe.jpg';

      // Realiza la carga del archivo a ownCloud utilizando WebDAV
      const response = await axios.put(
        `${process.env.OWNCLOUD_URL}/remote.php/webdav/${destinationPath}`,
        buffer,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
            Authorization: `Basic ${Buffer.from(
              `${process.env.OWNCLOUD_USERNAME}:${process.env.OWNCLOUD_PASSWORD}`,
            ).toString('base64')}`,
          },
        },
      );
      if (response.status === 201) {
        return 'Archivo creado exitosamente en ownCloud.';
      } else {
        throw new Error('Error al cargar el archivo en ownCloud.');
      }
    } catch (error) {
      throw error;
    }
  }
}
