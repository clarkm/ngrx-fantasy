import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Team } from './team.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CurrentTeamService } from '../current-team.service';

@Component({
  selector: 'app-draft-pool',
  templateUrl: './draft-pool.component.html',
  styleUrls: ['./draft-pool.component.scss']
})
export class DraftPoolComponent implements OnInit, OnDestroy {
  draftPool: Observable<any>;
  currentActiveTeam;
  currentActiveTeam$: Subscription;

  constructor(private store: Store<AppState>, private currentTeamService: CurrentTeamService) {
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

  removePlayerFromDraftPool(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'REMOVE_PLAYER_FROM_DRAFT_POOL',
      payload: {
        player: player
      }
    });
  }

  // use a behavior subject for 'active team'
  addPlayerToTeam(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_TEAM',
      payload: {
        player: player,
        teamName: this.currentActiveTeam.name
      }
    });
  }

  ngOnInit() {
    this.currentActiveTeam$ = this.currentTeamService.currentSelectedTeamSource
      .subscribe(currentActiveTeam => this.currentActiveTeam = currentActiveTeam)
      this.store.dispatch({ type: '[Draft pool] Load Players' });
  }

  ngOnDestroy() {
    this.currentActiveTeam$.unsubscribe();
  }

}