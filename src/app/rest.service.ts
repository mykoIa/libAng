import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from "./author/author";

@Injectable({providedIn: 'root'})
export class RestService {

  constructor(private http: HttpClient) {}

  url: string = "http://localhost:8080/api/library/author/getAll";

  getAuthors() {
    return this.http.get<Author[]>(this.url);
  }

}
