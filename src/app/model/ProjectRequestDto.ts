import {Injectable} from "@angular/core";

@Injectable()
export class ProjectRequestDto{
  user:number;
  name: string;
  dwy:string;
  image:string;
  rating:number;
  content:string;
  purpose:string;
  money:number;
  constructor(){
    this.name = " ";
    this.image = " ";
    this.dwy = " ";
    this.money = 0;
    this.content = " ";
    this.purpose = " ";
    this.rating = 0;
  }
}
