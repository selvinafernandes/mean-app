import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { User } from './users/user';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private base_url = 'http://127.0.0.1:3000/api/user';
  token: string;
  private userSource = new Subject<User>();
  user$ = this.userSource.asObservable();

  constructor( @Inject(Http) public http: Http) { }

  setUser(user: User) {
    this.userSource.next(user);
  }

  registerUser(user: User) : Observable<boolean> {
  	let body = JSON.stringify(user);
  	let headers = new Headers();
  		headers.append('Content-Type','application/json');
  	let options = new RequestOptions({ headers: headers });
  	return this.http.post(`${this.base_url}/register`, body, options).map( (res) => this.setToken(res) );
  }

  setToken(res:any){
  	let body = JSON.parse(res['_body']);
  	if(body['success'] == true ){
  		this.token = body['token'];
  		localStorage.setItem('currentUser', JSON.stringify({
  			email: body['user']['email'],
  			token: this.token
  		}));
  	}
  	return body;
  }
}