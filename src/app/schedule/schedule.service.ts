import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ScheduleList } from '../schedule';
import { SessionList } from '../schedule-list';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  getSchedule(): Observable<ScheduleList[]> {
    return of(SessionList);
  }

  constructor() { }
}
