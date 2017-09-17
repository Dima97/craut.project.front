import {Component, OnInit} from "@angular/core";
import {Project} from "../../../model/project";
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";


@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})

export class AdminPageComponent implements OnInit{
  // protected user:User = new User();
  users:User[] = [];
  constructor(private userService:UserService) {
    // this.users = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(this.users);
  }
  ngOnInit(){
    this.userService.getAll().
      subscribe((resp: Response) =>{
      console.log(resp);
      for(let index in resp){
        console.log(resp[index]);
        this.users[index] = resp[index];
      }
    });
  }
}
