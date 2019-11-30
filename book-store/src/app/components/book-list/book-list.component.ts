import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['id', 'title', 'author', 'ISBN', 'actions'];


  constructor(private bookService: BookService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  async getAllSeries() {
    this.dataSource.data = await this.bookService.getAllBooks();
  }

  async delete(book: Book) {

    await this.bookService.deleteBookById(book.id);
    this.getAllSeries();
  }

  openAddBook() {
    this.dialog.open(AddBookComponent, {});
  }
}
