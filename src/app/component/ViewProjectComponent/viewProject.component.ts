import { Component} from "@angular/core";
import {Project} from "../../model/project";

@Component({
  selector: 'app-project-view',
  templateUrl:'./viewProject.component.html',
  styleUrls: ['./viewProject.component.css']
})

export class ViewProjectComponent{
  protected project: Project = new Project;
}
