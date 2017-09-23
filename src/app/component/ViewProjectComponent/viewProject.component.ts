import {Component, OnDestroy, OnInit} from "@angular/core";
import {Project} from "../../model/project";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProjectService} from "../../service/projectService";
import {User} from "../../model/user";
import {Comments} from "../../model/comments";
import {ResponseProjectAndTags} from "../../model/ResponseProjectAndTags";

@Component({
  selector: 'app-project-view',
  templateUrl:'./viewProject.component.html',
  styleUrls: ['./viewProject.component.css']
})

export class ViewProjectComponent implements OnDestroy,OnInit{
  protected project: Project = new Project;
  protected projectAndTagsResponse:ResponseProjectAndTags;
  protected tags:string[];
  protected projects:Project[] = [];
  private idproject:number;
  private user:User = new User();
  private subscribtion:Subscription;
  protected comment:Comments = new Comments();
  constructor(private  router:Router,private activateRouter: ActivatedRoute,
              private projectService: ProjectService){
    this.subscribtion = this.activateRouter.params.subscribe(params => this.idproject = params["idproject"]);
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.user);
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
  ngOnInit(){
    this.projectService.sendIdProject(this.idproject)
      .subscribe(
        data => {
          this.projectAndTagsResponse = data.json();
        })
  }
  switched(tag:string){
    location.href='/searcheResults/'+tag;
  }
  sendComment(data:any){
    this.comment.idproject = this.idproject;
    this.comment.iduser = this.user.id;
    console.log(this.comment);
    this.projectService.sendComment(this.comment).subscribe(data =>{console.log(data)})
  }
  rating(rating:number){
    this.projectService.sendRating(rating,this.idproject).subscribe(data =>{console.log(data)})
  }
}
