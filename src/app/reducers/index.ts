import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromSongs from './songs.reducer';
import { SongListModel } from '../models/songs-models';

export interface AppState {
  counter: fromCounter.CounterState;
  songs: fromSongs.SongState
}

export const reducers = {
  counter: fromCounter.reducer,
  songs: fromSongs.reducer
}

const selectCounterBranch = (state: AppState) => state.counter;
const selectSongsBranch = (state: AppState) => state.songs;

const selectSongEntityArray =
  fromSongs.adapter.getSelectors(selectSongsBranch).selectAll;



export const selectSongListModel = createSelector(
  selectSongEntityArray,
  songs => songs as SongListModel[]
)


export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
)
