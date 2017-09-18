import {Component, OnDestroy, OnInit} from "@angular/core";
import {Project} from "../../model/project";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProjectService} from "../../service/projectService";

@Component({
  selector: 'app-project-view',
  templateUrl:'./viewProject.component.html',
  styleUrls: ['./viewProject.component.css']
})

export class ViewProjectComponent implements OnDestroy,OnInit{
  protected project: Project = new Project;
  private idproject:number;
  private subscribtion:Subscription;
  protected comment: string;
  constructor(private activateRouter: ActivatedRoute,
              private projectService: ProjectService){
    this.subscribtion = this.activateRouter.params.subscribe(params => this.idproject = params["idproject"]);

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
    console.log(this.comment);
    this.projectService.sendComment(this.comment, this.project.idproject).subscribe(data =>{console.log(data)})
  }
}
