import { Component} from "@angular/core";
import {UserService} from "../../service/userService";

@Component({
  selector: 'app-image-area',
  templateUrl:'./image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent {
  constructor(){
    this.id_img = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169795/sy6afdedllqhpbh8zebq.jpg';
  }
  id_img: any;
  updateImg(value: any){
    this.id_img = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }

}
