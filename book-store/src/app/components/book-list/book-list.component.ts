import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book: Book[] = [];
  dataSource = new MatTableDataSource(this.book);
  displayedColumns: string[] = ['id', 'title', 'author', 'ISBN', 'actions'];



  constructor() {
  }

  ngOnInit() {
  }

}
