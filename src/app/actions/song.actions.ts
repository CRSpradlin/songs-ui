import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducer";

let id = 1;

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


export const loadSongData = createAction(
  '[app songs] load the song data'
);

export const loadSongsDataSucceeded = createAction(
  '[app songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

export const loadSongsFailed = createAction(
  '[app songs] loading the songs failed',
  props<{ errorMessage: string }>()
);
