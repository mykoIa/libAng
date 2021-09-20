import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from "./author";

const urlGetAll = 'http://localhost:8080/api/library/author/getAll';
const urlDelete = 'http://localhost:8080/api/library/author/delete/';


@Injectable({providedIn: 'root'})
export class AuthorRestService {

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get<Author[]>(urlGetAll);
  }

  deleteAuthor(id: string) {
    return this.http.delete(urlDelete + id)
  }

}