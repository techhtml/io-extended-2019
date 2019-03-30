import { Component, OnInit } from '@angular/core';
import { SessionList } from '../schedule-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  sessionList = SessionList;
  
  constructor() { }

  ngOnInit() {
  }

}
