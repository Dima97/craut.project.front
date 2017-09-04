import { Injectable} from '@angular/core';
import {CoreService} from './coreService';
import {User} from '../model/user';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from './AuthentificationService';
import {Observable} from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService extends CoreService {
  private user: User = new User();
  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private authentificationService: AuthenticationService) {
    super();
  }
  getUsers(): Observable<User[]> {
    let headers = new Headers({'Authorization': 'Bearer' + this.authentificationService.token});
    let options = new RequestOptions({headers: headers});

    return this.http.get('/api/users', options).map((response: Response) => response.json());
  }
}
