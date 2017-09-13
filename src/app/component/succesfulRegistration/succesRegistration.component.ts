import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthenticationService} from "../../service/AuthentificationService";

@Component({
  selector:'app-succes-register',
  templateUrl:'./succesRegistration.component.html',
  styleUrls:['./seccesRegistration.component.css'],
  providers: [AuthenticationService]
})

export class SuccesRegistrationComponent implements OnInit{

  private urlPage:string;
  constructor (private http: Http,
               private autentificationService:AuthenticationService){}
  ngOnInit(){
    this.autentificationService.getPageURL().subscribe((data:Response) => this.urlPage = data.json());
    console.log(this.urlPage);
  }
}
