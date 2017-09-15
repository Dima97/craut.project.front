import {animate, Component, state, style, transition, trigger} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  protected user: User = new User();
  protected confirmPassword: string;
  constructor (private userService: UserService) {}
  controller() {}
  checkFirstName(){}
  checkLastName(){}
  checkEmail(){}
  checkNick(){}
  checkPassword(){}
  checkConfirmPassword(){}
  register(data: any) {
    this.userService.register(this.user).subscribe(data => {
      console.log(data);
    })
    location.href='/';
  }
}
