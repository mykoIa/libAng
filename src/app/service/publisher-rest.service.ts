import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Publisher} from "../model/publisher";

const urlGetAll = 'http://localhost:8080/api/library/publisher/getAll';
const urlGetById = 'http://localhost:8080/api/library/publisher/getById/';
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

  getPublisherById(id: string) {
    return this.http.get(urlGetById + id);
  }

  deletePublisher(id: string) {
    return this.http.delete(urlDelete + id);
  }

  addPublisher(data: any) {
    return this.http.post<Publisher>(urlAdd, data);
  }

  updatePublisher(data: any) {
    return this.http.put<Publisher>(urlUpdate, {id: data.id, publisherName: data.publisherName});
  }
}
