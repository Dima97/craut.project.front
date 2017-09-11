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
  register(user: User){
    console.log("registration");
    return this.http.post(`${this.webService}registration`,user).map((response:Response) => response);
  }
  getProfileByLogin(login: String) {
    let body =  {username: login};
    return this.authHttp.post(`${this.webService}get-user`,body)
      .map((response: Response) => response.json());
  }
  updateProfile(user: User) {
    console.log(JSON.stringify(user));
    return this.authHttp.post(`${this.webService}update-user`, user)
      .map((response: Response) => response);
  }
  saveCurrentUser(username: string){
    this.getProfileByLogin(username).subscribe(
      data => {
        localStorage.setItem('currentUserData', JSON.stringify({
          login: data.username,
          id: data.id,
          // image: data.image,
        }));
        console.log('data_ ' + localStorage.getItem('currentUserData'));
        console.log('data_ ' + localStorage.getItem('currentUser'));
      },
      error => {
        console.log('error in getProfileByLogin');
      });
  }

}
