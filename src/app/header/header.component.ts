import {Component, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public appComponent: AppComponent) {}
    switchLanguage(language: string) {
      this.appComponent.changeLanguage(language);
      }
}
