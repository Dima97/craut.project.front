import { Component} from "@angular/core";
import {UserService} from "../../../service/userService";
import {User} from "../../../model/user";
import {ImageComponent} from "../../imageArea/image.component";
import {FormGroup} from "@angular/forms";
import {ValidationData} from "../../../service/validationData";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css'],
  providers: [ImageComponent]
})

export class EditProfileComponent {
  protected user: User = new User();
  isPasswordConfirm = false;
  passwordConfirm: string;
  protected error: string;
  form: FormGroup;
  formErrors = {
    passwordConfirm: ''
  };
  constructor (private userService: UserService,
               private imageComponent: ImageComponent,
               private validationService: ValidationData) {
  }
  static setErrors(answer: string) {
    return answer === null;
  }
  checkPasswordConfirm(){
    this.formErrors.passwordConfirm = this.validationService.confirmPassword(this.user.password, this.passwordConfirm);
    this.isPasswordConfirm = EditProfileComponent.setErrors(this.formErrors.passwordConfirm);
  }
  updateProfile(data: any) {
    console.log(this.user);
    this.userService.updateProfile(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
