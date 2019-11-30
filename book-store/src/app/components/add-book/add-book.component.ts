import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  book: Book =
    {
      id: 0,
      bookTitle: '',
      author: '',
      ISBN: ''
    };

  constructor() {
  }

  ngOnInit() {
  }

}
