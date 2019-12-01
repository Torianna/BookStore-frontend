import { Component, Input, OnInit, resolveForwardRef } from '@angular/core';
import { Book } from '../../models/book';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { BookService } from '../../services/book.service';
import { AddBookComponent } from '../add-book/add-book.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book: Book[] = [];
  dataSource = new MatTableDataSource(this.book);
  displayedColumns: string[] = ['id', 'title', 'author', 'isbn', 'actions'];

  constructor(private bookService: BookService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  async getAllBooks() {
    this.dataSource.data = await this.bookService.getAllBooks();
  }

  async delete(book: Book) {

    await this.bookService.deleteBookById(book.id);
    this.getAllBooks();
  }

  openAddBook() {
    this.dialog.open(AddBookComponent, {}).afterClosed().subscribe(result => {
      this.getAllBooks();
    });
  }
}
