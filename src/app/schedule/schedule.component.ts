import { Component, OnInit } from '@angular/core';
import { ScheduleList } from '../schedule';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  sessionList: ScheduleList[]
  
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule(): void {
    this.scheduleService.getSchedule()
      .subscribe(sessionList => this.sessionList = sessionList)
  }

}
