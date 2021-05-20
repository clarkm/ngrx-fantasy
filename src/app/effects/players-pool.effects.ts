import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PlayersService } from './../players.service';
 
@Injectable()
export class PlayerPoolEffects {
 
  loadPlayers$ = createEffect(() => this.actions$.pipe(
    ofType('[Draft pool] Load Players'),
    mergeMap(() => this.playersService.getAll()
      .pipe(
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