import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrentTeamService {

  private selectedTeamSource = new BehaviorSubject({});
  currentSelectedTeamSource = this.selectedTeamSource.asObservable();

  constructor() { }

  changeSelectedTeam(team) {
    this.selectedTeamSource.next(team)
  }

}