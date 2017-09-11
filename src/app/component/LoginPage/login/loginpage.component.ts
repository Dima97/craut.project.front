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
  error: string;
  protected user: User = new User();

  constructor(private authenticationService: AuthenticationService,
              private userServise: UserService,
              private router: Router,
              private userService: UserService) {

  }
  checkLogin() {}
  checkPassword() {}
  // login(data: any) {
  //   console.log(this.user.username + ' ' + this.user.password);
  //   this.authenticationService.login(this.user.username, this.user.password).subscribe(result => {
  //     if (result === true) {
  //       $('#hidden-submit').click();
  //       console.log('next save');
  //       this.userService.saveCurrentUser(this.user.username);
  //       this.router.navigate(['/profile']);
  //     }}, (err) => {
  //     if (err === 'Unauthorized') {
  //       this.error = "INCORRECT_PASS";
  //     }});
  //   this.authenticationService.getMe();
  //     }
  loading = false;
  returnUrl: string;
  errorMessage: string;
  login(data: any) {
    this.loading = true;
    this.errorMessage = null;
    this.authenticationService.login(this.user.username, this.user.password)
      .flatMap(data => {
        return this.authenticationService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          this.errorMessage = error.json().message;
        }
      );
  }
}
