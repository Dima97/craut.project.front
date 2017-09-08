import { Component} from "@angular/core";

@Component({
  selector: 'app-menu-profile',
  templateUrl: './menuProfile.component.html',
  styleUrls: ['./menuProfile.component.css']
})
export class appMenuProfileComponent{
  displayInfoProfile: boolean = true;
  displayEditProfile: boolean = true;

  changeDisplayInfo () {
    this.displayInfoProfile = !this.displayInfoProfile;
  }
  changeDisplayEdit() {
    this.displayEditProfile = !this.displayEditProfile;
  }
}
