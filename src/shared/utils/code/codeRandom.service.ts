import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeRandomService {
  generateCode(): number {
    let randomNum = '';
    for (let i = 0; i < 8; i++) {
      randomNum += Math.floor(Math.random() * 10);
    }
    return Number(randomNum)
  }
}
