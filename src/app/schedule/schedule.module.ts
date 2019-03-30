import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [SessionDetailComponent, SessionComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
