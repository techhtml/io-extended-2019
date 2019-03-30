import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AttendingComponent } from './attending/attending.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamComponent } from './team/team.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    AttendingComponent,
    RegistrationComponent,
    TeamComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
