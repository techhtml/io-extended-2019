import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Schedule } from '../schedule';
import { ScheduleList } from '../schedule-list';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
  getScheduleList(): Observable<Schedule[]> {
    return of(ScheduleList);
  }

  constructor() { }
}
