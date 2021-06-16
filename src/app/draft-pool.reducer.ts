import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DraftPool } from './draft-pool.model';
import * as DraftPoolActions from './draft-pool.actions';

export const draftPoolsFeatureKey = 'draftPools';

export interface State extends EntityState<DraftPool> {
  // additional entities state properties
}

export const adapter: EntityAdapter<DraftPool> = createEntityAdapter<DraftPool>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(DraftPoolActions.addDraftPool,
    (state, action) => adapter.addOne(action.draftPool, state)
  ),
  on(DraftPoolActions.upsertDraftPool,
    (state, action) => adapter.upsertOne(action.draftPool, state)
  ),
  on(DraftPoolActions.addDraftPools,
    (state, action) => adapter.addMany(action.draftPools, state)
  ),
  on(DraftPoolActions.upsertDraftPools,
    (state, action) => adapter.upsertMany(action.draftPools, state)
  ),
  on(DraftPoolActions.updateDraftPool,
    (state, action) => adapter.updateOne(action.draftPool, state)
  ),
  on(DraftPoolActions.updateDraftPools,
    (state, action) => adapter.updateMany(action.draftPools, state)
  ),
  on(DraftPoolActions.deleteDraftPool,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DraftPoolActions.deleteDraftPools,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DraftPoolActions.loadDraftPools,
    (state, action) => adapter.setAll(action.draftPools, state)
  ),
  on(DraftPoolActions.clearDraftPools,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
