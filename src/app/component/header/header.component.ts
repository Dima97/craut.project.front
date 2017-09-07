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
}
