import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DbModule } from './config';

@Module({
    imports: [HttpModule, DbModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
