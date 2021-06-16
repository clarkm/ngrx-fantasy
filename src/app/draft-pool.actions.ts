import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { DraftPool } from './draft-pool.model';

export const loadDraftPools = createAction(
  '[DraftPool/API] Load DraftPools', 
  props<{ draftPools: DraftPool[] }>()
);

export const addDraftPool = createAction(
  '[DraftPool/API] Add DraftPool',
  props<{ draftPool: DraftPool }>()
);

export const upsertDraftPool = createAction(
  '[DraftPool/API] Upsert DraftPool',
  props<{ draftPool: DraftPool }>()
);

export const addDraftPools = createAction(
  '[DraftPool/API] Add DraftPools',
  props<{ draftPools: DraftPool[] }>()
);

export const upsertDraftPools = createAction(
  '[DraftPool/API] Upsert DraftPools',
  props<{ draftPools: DraftPool[] }>()
);

export const updateDraftPool = createAction(
  '[DraftPool/API] Update DraftPool',
  props<{ draftPool: Update<DraftPool> }>()
);

export const updateDraftPools = createAction(
  '[DraftPool/API] Update DraftPools',
  props<{ draftPools: Update<DraftPool>[] }>()
);

export const deleteDraftPool = createAction(
  '[DraftPool/API] Delete DraftPool',
  props<{ id: string }>()
);

export const deleteDraftPools = createAction(
  '[DraftPool/API] Delete DraftPools',
  props<{ ids: string[] }>()
);

export const clearDraftPools = createAction(
  '[DraftPool/API] Clear DraftPools'
);
