import {Component, OnDestroy, OnInit} from "@angular/core";
import {Project} from "../../model/project";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProjectService} from "../../service/projectService";
import {User} from "../../model/user";
import {Comments} from "../../model/comments";

@Component({
  selector: 'app-project-view',
  templateUrl:'./viewProject.component.html',
  styleUrls: ['./viewProject.component.css']
})

export class ViewProjectComponent implements OnDestroy,OnInit{
  protected project: Project = new Project;
  private idproject:number;
  private user:User = new User();
  private subscribtion:Subscription;
  protected comment:Comments = new Comments();
  constructor(private activateRouter: ActivatedRoute,
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
          this.project = data.json();
          console.log(this.project);
        })
  }
  sendComment(data:any){
    this.comment.idproject = this.idproject;
    this.comment.iduser = this.user.id;
    console.log(this.comment);
    this.projectService.sendComment(this.comment).subscribe(data =>{console.log(data)})
  }
  rating(rating:number){
    console.log("rating suka");
    this.projectService.sendRating(rating,this.idproject).subscribe(data =>{console.log(data)})
  }
}
