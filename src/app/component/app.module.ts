import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule} from "@angular/http";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {DropdownModule} from 'ngx-dropdown';
import {Form, FormsModule} from '@angular/forms';
import {LoginComponent} from './LoginPage/login.component';
import {LoginPageComponent} from './LoginPage/login/loginpage.component';
import {RegisterComponent} from './LoginPage/RegisterPage/register.component';
import {AuthHttp} from 'angular2-jwt';
import {Http, RequestOptions} from '@angular/http';
import {UserService} from '../service/userService';
import {AuthGuard} from '../service/guards/auth.guards';
import {AuthenticationService} from '../service/AuthentificationService';
import {authHttpUserFactory} from '../../authUserFactory';
import {appRouting, routing} from "./app.routing";
// import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {CommonModule} from "@angular/common";
import {logoutComponent} from "./logout/logout.component";
import {profileComponent} from "./profile/profile.component";
import {RouterModule, Router, Routes} from "@angular/router";
import {appMenuProfileComponent} from "./profile/menuProfile/menuProfile.component";
import {EditProfileComponent} from "./profile/EditProfile/editProfile.component";
import {InfoProfileComponent} from "./profile/InfoProfile/infoProfile.component";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginPageComponent,
    RegisterComponent,
    logoutComponent,
    profileComponent,
    appMenuProfileComponent,
    EditProfileComponent,
    InfoProfileComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    routing,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpUserFactory,
      deps: [Http, RequestOptions]
    },
    UserService,
    AuthGuard,
    AuthenticationService
    // appRouting
  ],
  bootstrap: [ AppComponent]
})
export class AppModule {
}
