import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist?: string;
  recommendedBy: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

// const initialState: SongState = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'No More Shall We Part', artist: 'Nick Cave and the Bad Seeds', recommendedBy: 'Jeff' },
//     2: { id: '2', title: 'Goodbye Yellow Brick Road', recommendedBy: 'Mark' }
//   }
// }

const reducerFunction = createReducer(
  initialState,
  on(actions.songAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.loadSongData, actions.loadSongsFailed, () => initialState),
  on(actions.loadSongsDataSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.songAddedFailure, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.songAddedSuccessfully, (s, a) => adapter.updateOne({
    id: a.oldId,
    changes: {
      id: a.payload.id
    }
  }, s)),
  on(actions.songRemoved, (s, a) => adapter.removeOne(a.payload.id, s))
);

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}







