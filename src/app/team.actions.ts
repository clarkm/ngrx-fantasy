import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Team } from './team.model';

export const loadTeams = createAction(
  '[Team/API] Load Teams', 
  props<{ teams: Team[] }>()
);

export const addTeam = createAction(
  '[Team/API] Add Team',
  props<{ team: Team }>()
);

export const upsertTeam = createAction(
  '[Team/API] Upsert Team',
  props<{ team: Team }>()
);

export const addTeams = createAction(
  '[Team/API] Add Teams',
  props<{ teams: Team[] }>()
);

export const upsertTeams = createAction(
  '[Team/API] Upsert Teams',
  props<{ teams: Team[] }>()
);

export const updateTeam = createAction(
  '[Team/API] Update Team',
  props<{ team: Update<Team> }>()
);

export const updateTeams = createAction(
  '[Team/API] Update Teams',
  props<{ teams: Update<Team>[] }>()
);

export const deleteTeam = createAction(
  '[Team/API] Delete Team',
  props<{ id: string }>()
);

export const deleteTeams = createAction(
  '[Team/API] Delete Teams',
  props<{ ids: string[] }>()
);

export const clearTeams = createAction(
  '[Team/API] Clear Teams'
);
