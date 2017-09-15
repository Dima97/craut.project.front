import { Component} from "@angular/core";

@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirmProfile.component.html',
  styleUrls: ['./confirmProfile.component.css']
})

export class ConfirmProfileComponent {
  protected imagePasport: string;
  protected additionally:string;
  constructor() {
    this.imagePasport = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }

  updateImg(value: any) {
    this.imagePasport = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }
}
