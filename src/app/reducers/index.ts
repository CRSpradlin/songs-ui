import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromSongs from './songs.reducer';
import * as fromUiHints from './ui-hints.reducer';

import { SongListModel } from '../models/songs-models';

export interface AppState {
  counter: fromCounter.CounterState;
  songs: fromSongs.SongState;
  uiHints: fromUiHints.UiHintsState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  songs: fromSongs.reducer,
  uiHints: fromUiHints.reducer
}

const selectCounterBranch = (state: AppState) => state.counter;
const selectSongsBranch = (state: AppState) => state.songs;
const selectUiHintsBranch = (state: AppState) => state.uiHints;

const selectSongEntityArray =
  fromSongs.adapter.getSelectors(selectSongsBranch).selectAll;

export const selectSongsLoaded = createSelector(
  selectUiHintsBranch,
  b => b.songsAreLoaded
)

export const selectSongListModel = createSelector(
  selectSongEntityArray,
  songs => songs.map(song => {
    return {
      ...song,
      isSaved: !song.id.toString().startsWith('T')
    } as SongListModel;
  })
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
