import { Injectable} from '@angular/core';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {CoreService} from './coreService';
import {Http, Response} from '@angular/http';


@Injectable()
export class AuthentioficationService extends CoreService{
  public token: string;
  constructor(private http: Http) {
    super();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  login (email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.webService}login`, JSON.stringify({emai: email, password: password}))
      .map((response: Response) => {
      const token = response.headers.get('Authorization');
      if ( token ) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({
          email: email,
          token: token
        }));
        return true;
      }
      return false; }).catch( e => {
        if (e.status === 401) {
          return Observable.throw('UnAuthorization');
        }
          });
  }
}
