import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookInformation} from './book-information';

const urlGetAll = 'http://localhost:8080/api/library/bookInfo/getAll';
const urlDelete = 'http://localhost:8080/api/library/bookInfo/delete/';
const urlAdd = 'http://localhost:8080/api/library/bookInfo/add/';
const urlUpdate = 'http://localhost:8080/api/library/bookInfo/update/';

@Injectable({providedIn: 'root'})
export class BookInfoRestService {

  constructor(private http: HttpClient) {
  }

  getBookInformation() {
    return this.http.get<BookInformation[]>(urlGetAll);
  }

  deleteBookInformation(id: string) {
    return this.http.delete(urlDelete + id)
  }

  addBookInformation(data: any) {
    return this.http.post<BookInformation>(urlAdd, {genre: data});
  }

  updateBookInformation(fullName: any, id: any) {
    return this.http.put<BookInformation>(urlUpdate, {id: id, publisherName: fullName});
  }

}
