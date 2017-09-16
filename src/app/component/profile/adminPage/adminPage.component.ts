import { Component} from "@angular/core";
import {Project} from "../../../model/project";
import {User} from "../../../model/user";


@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})

export class AdminPageComponent {
  protected user:User = new User();
  constructor() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.user);
  }
}
