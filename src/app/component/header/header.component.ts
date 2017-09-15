import {Component, ViewChild} from '@angular/core';
import { AppComponent} from '../app.component';
import {AuthGuard} from '../../service/guards/auth.guards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mode: Boolean = false;
  constructor(public appComponent: AppComponent) {}
  switchLanguage(language: string) {
    this.appComponent.changeLanguage(language);
  }
  changeMode() {
    if(this.mode) {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/solar/bootstrap.min.css");
      localStorage.setItem("mode", "night");
    } else {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css");
      localStorage.setItem("mode", "day");
    }
  }

}
