import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

import { catchError, map, switchMap } from "rxjs/operators";

import * as appActions from '../actions/app.actions';
import * as songActions from '../actions/song.actions';
import { SongEntity } from "../reducers/songs.reducer";
import { of } from "rxjs";

@Injectable()
export class SongsEffects{

  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.songAdded),
      switchMap(originalAction => this.client.post<SongEntity>(environment.baseUrl + 'songs', {
        title: originalAction.payload.title,
        artist: originalAction.payload.artist,
        recommendedBy: originalAction.payload.recommendedBy
      })
        .pipe(
          map(song => songActions.songAddedSuccessfully({ payload: song, oldId: originalAction.payload.id })),
          catchError(err => of(songActions.songAddedFailure({ payload: originalAction.payload, message: 'Adding the Song Failed' })))
        )
      )
    )
  , { dispatch: true })

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.loadSongData),
      switchMap(() => this.client.get<GetSongsResponse>(environment.baseUrl + 'songs')
        .pipe(
          map(response => response.data),
          map(data => songActions.loadSongsDataSucceeded({ payload: data }))
        )
      )
    ), { dispatch: true }
  );

  // appStarted -> LoadSongs
  appStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songActions.loadSongData())
    )
  )



  constructor(private actions$: Actions, private client:HttpClient) { }
}

interface GetSongsResponse {
  data: SongEntity[]
}
