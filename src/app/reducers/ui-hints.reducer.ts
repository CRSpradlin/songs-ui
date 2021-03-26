import { Action, createReducer, on } from "@ngrx/store";
import * as songActions from '../actions/song.actions';

export interface UiHintsState {
  songsAreLoaded: boolean;
  // etc. etc. for other things too
}

const initialState: UiHintsState = {
  songsAreLoaded: false
}




const myReducer = createReducer(
  initialState,
  on(songActions.loadSongsDataSucceeded, s => ({ ...s, songsAreLoaded: true })),
  on(songActions.loadSongData, s => ({ ...s, songsAreLoaded: false }))
)

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action);
}
