import * as fromDraftPool from './../draft-pool.actions';

import { Component, OnDestroy, OnInit } from '@angular/core';

// import { Team } from './team.model';
import { AppState } from './../app.state';
import {MessageService} from 'primeng/api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-draft-pool',
  templateUrl: './draft-pool.component.html',
  styleUrls: ['./draft-pool.component.scss'],
  providers: [MessageService]
})
export class DraftPoolComponent implements OnInit, OnDestroy {
  draftPool: Observable<any>;

  constructor(private store: Store<AppState>, private messageService: MessageService) {
    this.draftPool = this.store.select(state => state.draftPool);
  }

  addPlayerToDraftPool(player, e) {
    e.preventDefault();
    fromDraftPool.addDraftPool(player);

    // this.store.dispatch({
    //   type: 'ADD_PLAYER_TO_DRAFT_POOL',
    //   payload: {
    //     player: player
    //   }
    // });
  }

  addPlayerToTeam(player, e) {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Player added to team'});
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_TEAM',
      payload: {
        player: player
      }
    });
  }

  ngOnInit() {
      this.store.dispatch({ type: '[Draft pool] Load Players' });
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Players loaded'});
  }

  ngOnDestroy() {
  }

}