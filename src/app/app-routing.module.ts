import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AttendingComponent } from './attending/attending.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'attending', component: AttendingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'team', component: TeamComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
