import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, flatMap, map, mergeMap, tap, toArray } from 'rxjs/operators';

import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { PlayersService } from './../players.service';

@Injectable()
export class PlayerPoolEffects {
 
  loadPlayers$ = createEffect(() => this.actions$.pipe(
    ofType('[Draft pool] Load Players'),
    mergeMap(() => this.playersService.getAll()
      .pipe(
        // tap(players => console.log("PLAYERS IN TAP before filter: ", players)),
        flatMap(response => response as any[]),
        filter(player => !!player.name ),
        toArray(),
        // tap(players => console.log("PLAYERS AFTER FILTER: ", players)),
        map(players => ({ type: '[Players API] Players Loaded Success', payload: players})),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private playersService: PlayersService
  ) {}
}