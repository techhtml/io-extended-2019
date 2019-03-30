import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from './schedule.service';
import { Session } from '../session';
import { SessionService } from './session.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleList: Schedule[]
  sessionList: Session[]

  constructor(
    private scheduleService: ScheduleService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.getScheduleList();
    this.getSessionList();
  }

  getScheduleList(): void {
    this.scheduleService.getScheduleList()
      .subscribe(scheduleList => this.scheduleList = scheduleList)
  }

  getSessionList(): void {
    this.sessionService.getSessionList()
      .subscribe(sessionList => this.sessionList = sessionList);
  }

}
