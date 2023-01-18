import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { cities } from './cities.dto';

@Controller()
@Injectable()
export class AppController {
  constructor(@Inject("PG_CONNECTION") private db: any, private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  async getData(): Promise<cities[]> { 
    return this.db.query('SELECT * FROM cities');
  }
}
