import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Funcionou!';
  }
  getMaisHello(): string {
    return 'Funcionou Mais!';
  }
}
