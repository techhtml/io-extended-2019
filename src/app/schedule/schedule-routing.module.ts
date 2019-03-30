import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent,
    children: [
      {
        path: ':id',
        component: SessionDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
