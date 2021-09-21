import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Publisher} from "./publisher";

const urlGetAll = 'http://localhost:8080/api/library/publisher/getAll';
const urlDelete = 'http://localhost:8080/api/library/publisher/delete/';
const urlAdd = 'http://localhost:8080/api/library/publisher/add/';
const urlUpdate = 'http://localhost:8080/api/library/publisher/update/';

@Injectable({providedIn: 'root'})
export class PublisherRestService {

  constructor(private http: HttpClient) {
  }

  getPublisher() {
    return this.http.get<Publisher[]>(urlGetAll);
  }

  deletePublisher(id: string) {
    return this.http.delete(urlDelete + id)
  }

  addPublisher(data: any) {
    return this.http.post<Publisher>(urlAdd, {publisherName: data});
  }

  updatePublisher(fullName: any, id: any) {
    return this.http.put<Publisher>(urlUpdate, {id: id, publisherName: fullName});
  }

}
