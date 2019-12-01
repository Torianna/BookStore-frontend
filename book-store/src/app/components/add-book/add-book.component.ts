import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  book: Book =
    {
      id: 0,
      title: '',
      author: '',
      isbn: ''
    };

  AuthorName = new FormControl();
  errorMgs: string;
  selectedPattern: string;
  patternNormal: any = '^[A].*';
  isOpen: false;

  constructor(private service: BookService,
              private dialogRef: MatDialogRef<AddBookComponent>) {
  }

  ngOnInit() {

    this.selectedPattern = this.patternNormal; // will change based on user preference

    if (this.selectedPattern === this.patternNormal) {
      this.errorMgs = 'Author name should start from letter A';
    }
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
