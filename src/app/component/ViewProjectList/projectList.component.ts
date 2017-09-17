import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../../service/projectService";
import {Observable} from "rxjs/Observable";
import { CoreService} from "../../service/coreService";
import {Http,Response} from "@angular/http";
import {Project} from "../../model/project";

@Component({
  selector: 'app-view-list-project',
  templateUrl: './projectList.component.html',
  styleUrls:['./projectList.component.css']
})

export class ProjectListComponent implements OnInit{
  projects: Project[] = [];
  constructor( private projectService: ProjectService, private http:Http){
  }
  ngOnInit() {
    this.projectService.getProjects()
      .subscribe((resp: Response) => {
        console.log(resp);
        for(let index in resp){
          console.log(resp[index]);
          this.projects[index] = resp[index];
        }
      });
  }
}
