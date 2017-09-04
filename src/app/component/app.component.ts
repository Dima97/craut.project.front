import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;
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
