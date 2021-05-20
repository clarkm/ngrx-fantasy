import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from './team.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CurrentTeamService } from '../current-team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Observable<any>;
  currentActiveTeam;
  currentActiveTeam$: Subscription;

  constructor(
    private store: Store<AppState>,
    private currentTeamService: CurrentTeamService
  ) {
    this.teams = this.store.select(state => state.teams);
  }

  // action creaters -- they return an action
  createTeam(name, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'CREATE_TEAM',
      payload: <Team>{
        name: name,
        players: []
      }
    });
  }

  removeTeam(name, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'REMOVE_TEAM',
      payload: <Team>{
        name: name,
        players: []
      }
    });
  }

  removePlayerFromTeam(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'REMOVE_PLAYER_FROM_TEAM',
      payload: {
        player: player,
        teamName: this.currentActiveTeam.name
      }
    });
    // add it back to the draftPool here too
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_DRAFT_POOL',
      payload: {
        player: player
      }
    })
  }

  changeTeam(team) {
    console.log('changed team: ', team);
    this.currentTeamService.changeSelectedTeam(team);
  }

  ngOnInit() {
    this.currentActiveTeam$ = this.currentTeamService.currentSelectedTeamSource.subscribe(
      currentActiveTeam => (this.currentActiveTeam = currentActiveTeam)
    );
  }

  ngOnDestroy() {
    this.currentActiveTeam$.unsubscribe();
  }
}
