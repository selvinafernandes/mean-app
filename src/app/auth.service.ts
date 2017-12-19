import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { User } from './users/user';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  // private base_url = 'http://127.0.0.1:3000/api/user';
  // token: string;
  // private userSource = new Subject<User>();
  // user$ = this.userSource.asObservable();

  constructor() { }

  setUser(user: User) {
    this.userSource.next(user);
  }

}