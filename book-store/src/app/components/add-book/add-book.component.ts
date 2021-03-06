import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  patternNormal: any = '(.*)?([\\b^A]+([a-z][A-Z]*)+\\s?)(.*)?';



  constructor(private service: BookService,
              private dialogRef: MatDialogRef<AddBookComponent>, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.errorMgs = 'Authors forename or authors surname should start from letter A';
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
