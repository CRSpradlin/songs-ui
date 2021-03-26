import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducer";

let id = 1;

// Initiator
export const songAdded = createAction(
  '[app songs] song added',
  ({ title, artist, recommendedBy }: { title: string, artist?: string, recommendedBy: string }) => ({
    payload: {
      title,
      artist,
      recommendedBy,
      id: 'Temp' + id++
    } as SongEntity
  })
);

// Success
export const songAddedSuccessfully = createAction(
  '[app songs] song added succesfully',
  props<{ payload: SongEntity, oldId: string }>()
);

export const songAddedFailure = createAction(
  '[app songs] song added failure',
  props<{ payload: SongEntity, message: string }>()
);

// Initiator
export const loadSongData = createAction(
  '[app songs] load the song data'
);

// Success
export const loadSongsDataSucceeded = createAction(
  '[app songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

// Failure
export const loadSongsFailed = createAction(
  '[app songs] loading the songs failed',
  props<{ errorMessage: string }>()
);


export const songRemoved = createAction(
  '[app songs] song removed',
  props<{ payload: SongEntity }>()
);

export const songRemovedFailure = createAction(
  '[app songs] song removed failure',
  props<{ payload: SongEntity, message: string }>()
);
