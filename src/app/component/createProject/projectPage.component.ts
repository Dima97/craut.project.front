import { Component} from "@angular/core";
import {ImageComponent} from "../imageArea/image.component";
import {Project} from "../../model/project";
import {ProjectService} from "../../service/projectService";

@Component({
  selector: 'app-project-page',
  templateUrl: './projectPage.component.html',
  styleUrls: ['./projectPage.component.css'],
})

export class ProjectPageComponent {
  protected project: Project = new Project;
  id_image: any;
  constructor(private projectService: ProjectService) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }
  updateImg(value: any) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }
  sendData(value:any){
    this.projectService.sendProjectData(this.project).subscribe(value => {
      console.log(value)
    });
  }
}
