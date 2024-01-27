import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomTokenService {
  async generarToken(): Promise<string> {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 10; i++) {
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return token;
  }
}
