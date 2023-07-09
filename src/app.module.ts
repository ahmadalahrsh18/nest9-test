import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
