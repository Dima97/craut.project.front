import {animate, Component, state, style, transition, trigger} from '@angular/core';
import {User} from "../../../model/user";

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  protected user: User = new User();
  protected confirmPassword: string;
  controller() {}
  checkFirstName(){}
  checkLastName(){}
  checkEmail(){}
  checkNick(){}
  checkPassword(){}
  checkConfirmPassword(){}
}
