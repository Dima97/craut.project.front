import { Routes, RouterModule } from '@angular/router';

import {profileComponent} from "./profile/profile.component";
import {ProjectPageComponent} from "./createProject/projectPage.component";
import {SuccesRegistrationComponent} from "./succesfulRegistration/succesRegistration.component";
import {ViewProjectComponent} from "./ViewProjectComponent/viewProject.component";
import {ProjectListComponent} from "./ViewProjectList/projectList.component";

const appRoutes: Routes = [
  {path:'succesRegistration',component: SuccesRegistrationComponent},
  {path: 'project', component: ProjectPageComponent},
  {path: 'profile', component: profileComponent},
  {path: 'view/project/:idproject', component: ViewProjectComponent},
  {path: '', component: ProjectListComponent},
  { path: '**', redirectTo: '/' }
];

export const appRouting: any[]=[];

export const routing = RouterModule.forRoot(appRoutes) ;
