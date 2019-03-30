import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Session } from '../../session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})

export class SessionDetailComponent implements OnInit {
  session: Session;

  constructor (
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSession();
  }

  getSession(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sessionService.getSession(id)
      .subscribe(session => this.session = session)
  }

  goBack(): void {
    this.location.back();
  }
}
