import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from './team.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Observable<any>;

  constructor(
    private store: Store<AppState>,
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

  removeTeam(team, e) {
    e.preventDefault();
    if (team.selected) {
      team.players.forEach(player => {
        // add it back to the draftPool here too
        this.store.dispatch({
          type: 'ADD_PLAYER_TO_DRAFT_POOL',
          payload: {
            player: player
          }
        })
      });
      this.store.dispatch({
        type: 'REMOVE_TEAM',
        payload: <Team>{
          name: team.name,
          players: []
        }
      });
    }
  }

  removePlayerFromTeam(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'REMOVE_PLAYER_FROM_TEAM',
      payload: {
        player: player,
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

  selectTeam(team) {
    this.store.dispatch({
      type: '[TEAMS COMPONENT] SELECT_TEAM',
      payload: {
        teamName: team.name
      }
    })

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
