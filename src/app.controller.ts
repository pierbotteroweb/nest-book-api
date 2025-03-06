import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book, books } from './FakeDatabase'

@Controller('books')
export class BooksControler {
  constructor(private readonly booksService: BooksService) {}
  
  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks()
  }
  
  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id
    return this.booksService.findById(bookId)
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if(!book.author || !book.title || !book.publicationYear) return undefined
    return this.booksService.create(bookData)
    
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string, 
    @Body() book: Partial<Book>
  ): Book | undefined {
    return this.booksService.update(+id, book)
  }
}
