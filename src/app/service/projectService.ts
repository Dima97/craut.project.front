import { Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {Project} from "../model/project";
import {Http,Response} from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProjectService extends CoreService{
 private project:Project = new Project;
 constructor(private http: Http,
             private authHttp: AuthHttp){
   super();
 }
 sendProjectData(project: Project){
   console.log("sendData");
   return this.http.post(`${this.webService}sendData`, project).map((response: Response) => response);
 }
}
