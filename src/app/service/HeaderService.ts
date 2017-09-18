import { Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {CoreService} from "./coreService";

@Injectable()
export class HeaderService extends CoreService{

  constructor(private http: Http){
    super();
  }
  sendSearcheRequest(data:string){
    return this.http.post(`${this.webService}searche`,data).map((response:Response) =>response);
  }
}
