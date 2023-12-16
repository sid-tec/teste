import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'REST API para Servidores do GFQ/UFF';
  }
  getMaisHello(): string {
    return 'Funcionou Mais!';
  }
}