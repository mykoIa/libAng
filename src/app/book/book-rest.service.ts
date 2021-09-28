import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from "./book";

const urlGetAll = 'http://localhost:8080/api/library/book/getAll';
const urlGetById = 'http://localhost:8080/api/library/book/getById/';
const urlDelete = 'http://localhost:8080/api/library/book/delete/';
const urlAdd = 'http://localhost:8080/api/library/book/add';
const urlUpdate = 'http://localhost:8080/api/library/book/update/';

@Injectable({providedIn: 'root'})
export class BookRestService {

  constructor(private http: HttpClient) {
  }

  getBook() {
    return this.http.get<Book[]>(urlGetAll);
  }

  getBookById(id: string) {
    return this.http.get<Book>(urlGetById + id);
  }

  delete(id: string) {
    return this.http.delete(urlDelete + id)
  }

  addBook(data: any) {
    return this.http.post<Book>(urlAdd, data).subscribe();
  }

  updateBook(data: any) {
    return this.http.put<Book>(urlUpdate, {
      id: data.id,
      genre: data.genre,
      numberOfPages: data.numberOfPages
    });
  }
}
