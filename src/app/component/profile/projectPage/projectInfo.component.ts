import { Component} from "@angular/core";
import {Project} from "../../../model/project";


@Component({
  selector: 'app-info-project',
  templateUrl: './projectInfo.component.html',
  styleUrls: ['./projectInfo.component.css']
})

export class ProjectInfoComponent {
  protected project: Project = new Project();
}
