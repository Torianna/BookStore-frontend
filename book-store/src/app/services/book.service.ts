import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8080/demo/bookStore/books';

  constructor(private http: HttpClient) { }

  async getAllBooks() {
    return await this.http.get<any[]>(this.url).toPromise();
  }

  addBook(book: Book) {
    return this.http.post<Book>(this.url, book).toPromise();
  }

  deleteBookById(id: number) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
}
