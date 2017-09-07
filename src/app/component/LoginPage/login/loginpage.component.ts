import {animate, Component, state, style, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../../model/user';
import {UserService} from '../../../service/userService';
import {AuthenticationService} from '../../../service/AuthentificationService';
import {Http} from "@angular/http";


declare let $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {
  isLoginCorrect = false;
  isPasswordExist = false;
  formErrors = {
    mylogin: null,
    password: null
  };
  model: any = {};
  loading;
  error: string;
  protected user: User = new User();

  constructor(private authenticationService: AuthenticationService) {

  }
  checkLogin() {}
  checkPassword() {}
  login(data: any) {
    console.log(this.user.email + ' ' + this.user.password);
    this.authenticationService.login(this.user.email, this.user.password).subscribe(result => {
      if (result === true) {
        $('#hidden-submit').click();
        console.log('next save');
      }
    });
  }
}
