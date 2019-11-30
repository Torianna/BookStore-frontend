import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { MatDialogRef } from '@angular/material';

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

  constructor(private service: BookService,
              private dialogRef: MatDialogRef<AddBookComponent>,) {
  }

  ngOnInit() {
  }

  async addBook() {
    console.log(this.book);
    this.service.addBook(this.book)
      .then(() => {
        this.dialogRef.close();
      })
      .catch(err => {
        alert('Something went wrong');
        console.error(err);
      });
  }
}
