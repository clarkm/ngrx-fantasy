import { TeamsComponent } from './../teams/teams.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Team } from './team.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-draft-pool',
  templateUrl: './draft-pool.component.html',
  styleUrls: ['./draft-pool.component.scss']
})
export class DraftPoolComponent implements OnInit, OnDestroy {
  draftPool: Observable<any>;

  constructor(private store: Store<AppState>, private teamsComp: TeamsComponent) {
    this.draftPool = this.store.select(state => state.draftPool);
  }

  addPlayerToDraftPool(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_DRAFT_POOL',
      payload: {
        player: player
      }
    });
  }

  addPlayerToTeam(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_TEAM',
      payload: {
        player: player
      }
    });
    this.teamsComp.selectTeam()
  }

  ngOnInit() {
      this.store.dispatch({ type: '[Draft pool] Load Players' });
  }

  ngOnDestroy() {
  }

}