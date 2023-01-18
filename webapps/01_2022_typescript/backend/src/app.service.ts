import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { cities } from './cities.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getData(): Promise<cities[]> {
    return firstValueFrom(
      this.httpService
        .get('https://unpkg.com/codes-postaux@3.7.0/codes-postaux.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip,deflate,compress',
          },
        })
        .pipe(map((res) => res.data)),
    );
  }
}
