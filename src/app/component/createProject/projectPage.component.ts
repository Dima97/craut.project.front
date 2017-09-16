import { Component} from "@angular/core";
import {ImageComponent} from "../imageArea/image.component";
import {Project} from "../../model/project";
import {ProjectService} from "../../service/projectService";
import {CalendarComponent} from "./calendar/calendar.component";
import {AuthGuard} from "../../service/guards/auth.guards";

@Component({
  selector: 'app-project-page',
  templateUrl: './projectPage.component.html',
  styleUrls: ['./projectPage.component.css'],
  providers: [CalendarComponent]
})

export class ProjectPageComponent {
  protected project: Project = new Project;
  constructor(private calendar:CalendarComponent,
              protected authGuard: AuthGuard) {
    this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }
  updateImg(value: any) {
    this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }
  // sendData(value:any){
  //   this.projectService.sendProjectData(this.project).subscribe(value => {
  //     console.log(value)
  //   });
  // }
  getDate(){
    this.calendar.getDate();
  }
}
