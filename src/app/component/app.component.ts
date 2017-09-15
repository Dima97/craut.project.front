import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {OverlayContainer} from "@angular/cdk/typings/overlay";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
  }
    changeLanguage(language: string) {
    this.translate.use(language);
  }
}
