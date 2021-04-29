import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(greeting = 'Hello'): string {
    return `${greeting} World!`;
  }
}
