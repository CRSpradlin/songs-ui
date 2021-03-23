/* We want to start with empty object and slowly add to it.

{

}

*/

import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromSongs from './songs.reducer';
import { SongListModel } from '../../models/songs-modals';

export interface AppState {
  counter: fromCounter.CounterState,
  songs: fromSongs.SongState
}

export const reducers = {
  counter: fromCounter.reducer,
  songs: fromSongs.reducer
}

//Branch Selections
const selectCounterBranch = (state: AppState) => state.counter;
const selectSongsBranch = (state: AppState) => state.songs;

//Counter Selectors from CounterBranch
//Memoized selector for cached values for better performance
export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
);
export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
);
export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);

//Songs Selectors from songsBranch
//Select the song list branch and convert to song entity array
const selectSongEntityArray = fromSongs.adapter.getSelectors(selectSongsBranch).selectAll;
export const selectSongListModel = createSelector(
  selectSongEntityArray,
  songs => songs as SongListModel[]
)
