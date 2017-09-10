import { Injectable} from "@angular/core";
import { UserService} from "./userService";

@Injectable()
export class ValidationData{
  errors = {
    email: "INVALID_EMAIL",
    password: "INVALID_PASSWORD"
  }

}
