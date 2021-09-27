import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from "./author";

const urlGetAll = 'http://localhost:8080/api/library/author/getAll';
const urlGetById = 'http://localhost:8080/api/library/author/getById/';
const urlDelete = 'http://localhost:8080/api/library/author/delete/';
const urlAdd = 'http://localhost:8080/api/library/author/add/';
const urlUpdate = 'http://localhost:8080/api/library/author/update/';

@Injectable({providedIn: 'root'})
export class AuthorRestService {

  constructor(private http: HttpClient) {
  }

  getAuthors() {
    return this.http.get<Author[]>(urlGetAll);
  }

  getAuthorById(id: string) {
    return this.http.get(urlGetById + id)
  }

  deleteAuthor(id: string) {
    return this.http.delete(urlDelete + id)
  }

  addAuthor(data: any) {
    return this.http.post<Author>(urlAdd, {fullName: data.fullName});
  }

  updateAuthor(data: any) {
    return this.http.put<Author>(urlUpdate, {id: data.id, fullName: data.fullName});
  }

}
