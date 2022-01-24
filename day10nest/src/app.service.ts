import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  stringRotation(s: string, n: number) : string {
   var ans = s.substring(n, s.length) + s.substring(0, n);
    return ans;
  }
}
