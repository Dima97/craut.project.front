import {Component, OnInit} from "@angular/core";
import {Project} from "../../../model/project";
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";
import {variable} from "@angular/compiler/src/output/output_ast";


@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})

export class AdminPageComponent implements OnInit{
  users:User[] = [];
  block:boolean[] =[];
  blockedList: number[] = [];
  constructor(private userService:UserService) {
  }
  ngOnInit(){
    this.userService.getAll().
      subscribe((resp: Response) =>{
      console.log(resp);
      for(let index in resp){
        console.log(resp[index]);
        this.users[index] = resp[index];
        this.block[index] = false;
      }
    });
  }
  blockedCheckbox(index: number){
    this.block[index] = true;
  }
  blocked(data:any){
    var i:number = 0;
    for (let index in this.block){
      if(this.block[index] == true){
        this.blockedList[i++] = this.users[index].iduser;
      }
    }
    console.log(this.blockedList);
    this.userService.blocking(this.blockedList).subscribe(data =>{ console.log(data);})
  }
}
