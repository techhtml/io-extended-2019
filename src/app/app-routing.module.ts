import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'speakers', component: SpeakersComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
