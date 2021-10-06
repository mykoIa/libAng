import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../model/user";

const urlGetAll = 'http://localhost:8080/api/library/user/getAll';
const urlGetById = 'http://localhost:8080/api/library/user/getById/';
const urlLogin = 'http://localhost:8080/api/library/user/login/';
const urlDelete = 'http://localhost:8080/api/library/user/delete/';
const urlAdd = 'http://localhost:8080/api/library/user/add/';
const urlUpdate = 'http://localhost:8080/api/library/user/update/';

@Injectable({providedIn: 'root'})
export class UserRestService {

  constructor(private http: HttpClient) {
  }

  getUser() {
    return this.http.get<User[]>(urlGetAll);
  }

  getUserById(id: string) {
    return this.http.get(urlGetById + id);
  }

  getUserForLogin(data: any) {
    return this.http.get<User>(urlLogin + data.login + "&" + data.password);
  }

  deleteUser(id: string) {
    return this.http.delete(urlDelete + id);
  }

  addUser(data: any) {
    return this.http.post<User>(urlAdd, data);
  }

  // updateUser(data: any) {
  //   return this.http.put<User>(urlUpdate, {id: data.id, publisherName: data.publisherName});
  // }

  register(data: any) {
    return this.http.post<User>(urlAdd, data);
  }
}
