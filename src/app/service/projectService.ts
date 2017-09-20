import { Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {Project} from "../model/project";
import {Http,Response} from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import {HttpClient} from "@angular/common/http";
import {Comments} from "../model/comments";
import {Tags} from "../model/tags";

@Injectable()
export class ProjectService extends CoreService{
  private project:Project = new Project;
  constructor(private http: Http,
              private authHttp: AuthHttp){
    super();
  }
  sendProjectData(data: any, tags:string[]){
    data.dwy=data.dwy.formatted;
    console.log(data,tags);
    return this.authHttp.post(`${this.webService}sendData`, JSON.stringify({data,tags})).map((response: Response) => response);
  }
  getProjects(){
    return this.http.get(`${this.webService}getProjects`).map(res => res.json());
  }
  sendIdProject(data: any){
    console.log(data);
    return this.authHttp.post(`${this.webService}idProject`,JSON.stringify(data)).map((response: Response) => response);
  }
  sendComment(comment: Comments){
    console.log(comment);
    return this.authHttp.post(`${this.webService}comment`, JSON.stringify(comment))
      .map((response:Response)=>response);
  }
  sendMoneyForProject(idProject:number,money:number){
    return this.http.post(`${this.webService}projectMoney`, JSON.stringify({idProject,money}))
      .map((response:Response)=>response);
  }
  sendTags(tag:Tags){
    console.log(tag);
    return this.authHttp.post(`${this.webService}tags`, JSON.stringify(tag)).map((response:Response) => response);
  }
  sendRating(rating:number,idproject:number){
    return this.authHttp.post(`${this.webService}rating`,JSON.stringify({rating,idproject}))
      .map((response:Response)=>response);
  }
}
