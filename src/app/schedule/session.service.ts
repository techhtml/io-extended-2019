import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Session } from '../session';
import { SessionList } from '../session-list';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  getSessionList(): Observable<Session[]> {
    return of(SessionList);
  }

  getSession(id: number): Observable<Session> {
    return of(SessionList.find(session => session.id === id));
  }

  constructor() { }
}
