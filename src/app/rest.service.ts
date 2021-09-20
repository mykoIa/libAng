import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from "./author/author";

const url = 'http://localhost:8080/api/library/author/getAll';

@Injectable({providedIn: 'root'})
export class RestService {

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get<Author[]>(url);
  }

}
