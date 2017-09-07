import {animate, Component, state, style, transition, trigger} from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  activeLink: boolean = false;

  changeActive(){
    this.activeLink = !this.activeLink;
  }
}
