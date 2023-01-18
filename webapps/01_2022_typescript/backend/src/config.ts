import { Pool } from 'pg';
import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

const database = {
    provide: "PG_CONNECTION",
    useValue: new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT,
    })
};

@Module({
    providers: [database],
    exports: [database]
})

export class DbModule{}