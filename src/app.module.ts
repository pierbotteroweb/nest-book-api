import { Module } from '@nestjs/common';
import { BooksControler } from './app.controller';
import { BooksService } from './app.service';

@Module({
  imports: [],
  controllers: [BooksControler],
  providers: [BooksService],
})
export class AppModule {}
