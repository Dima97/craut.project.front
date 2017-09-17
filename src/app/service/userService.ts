import { Injectable} from '@angular/core';
import {CoreService} from './coreService';
import {User} from '../model/user';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from './AuthentificationService';
import {Observable} from 'rxjs/Observable';
import {AuthConfigConsts, AuthHttp} from 'angular2-jwt';
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
  register(user: User){
    console.log("registration");
    return this.http.post(`${this.webService}registration`,user).map((response:Response) => response);
  }
  updateProfile(user: User) {
    var data : any ;
    data = localStorage.getItem("image");
    localStorage.removeItem("image");
    this.user = user;
    this.user.image = data;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}update-user`, this.user,{headers})
      .map((response: Response) => response);
  }
  getAll(){
    return this.http.get(`${this.webService}getUsers`).map(res =>res.json());
  }

}
