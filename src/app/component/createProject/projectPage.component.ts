import { Component} from "@angular/core";
import {ImageComponent} from "../imageArea/image.component";
import {Project} from "../../model/project";
import {ProjectService} from "../../service/projectService";
import {CalendarComponent} from "./calendar/calendar.component";
import {DateModel} from "ng2-datepicker";
import {AuthGuard} from "../../service/guards/auth.guards";
import {Tags} from "../../model/tags";

@Component({
  selector: 'app-project-page',
  templateUrl: './projectPage.component.html',
  styleUrls: ['./projectPage.component.css'],
})

export class ProjectPageComponent {
  protected project: Project = new Project;
  id_image: any;
  calendar:DateModel;
  loading = false;
  tags:string[];
  errorMessage: string;
  constructor(private projectService:ProjectService,
              protected calendarComponent:CalendarComponent,
              protected authGuard: AuthGuard) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }
  updateImg(value: any) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }
  sendData(value:any){
    this.project.image = this.id_image;
    this.projectService.sendProjectData(this.project, this.tags).subscribe( error => {
      this.loading = false;
    });
    // this.projectService.sendTags(this.tags).subscribe( error => {console.log(this.errorMessage)})
  }
}
