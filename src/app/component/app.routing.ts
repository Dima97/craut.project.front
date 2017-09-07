import { Routes, RouterModule } from '@angular/router';

import  { HeaderComponent} from './header/header.component';
import {AuthGuard} from '../service/guards/auth.guards';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes) ;
