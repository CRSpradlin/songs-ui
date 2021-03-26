import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

import * as appActions from '../actions/app.actions';
import * as songsActions from '../actions/song.actions';
import { catchError, map, switchMap } from "rxjs/operators";
import { SongEntity } from "../reducers/songs.reducer";
import { of } from "rxjs";

@Injectable()
export class SongsEffects {

  removeSong$ = createEffect(() =>
    this.actions$.pipe(

    ), { dispatch: false }


  )

  // songAdded -> (a trip to api ) => (songAddedSuccessfully | songAddedFailure)
  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songsActions.songAdded),
      switchMap(originalAction => this.client.post<SongEntity>(environment.baseUrl + 'songs', {
        title: originalAction.payload.title,
        artist: originalAction.payload.artist,
        recommendedBy: originalAction.payload.recommendedBy
      }).pipe(
        map(song => songsActions.songAddedSuccessfully({ payload: song, oldId: originalAction.payload.id })),
        catchError(err => of(songsActions.songAddedFailure({ payload: originalAction.payload, message: 'Adding The Song Failed' })))
      )

      )
    )
    , { dispatch: true })

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songsActions.loadSongData),
      switchMap(() => this.client.get<GetSongsResponse>(environment.baseUrl + 'songs')
        .pipe(
          map(response => response.data),
          map(data => songsActions.loadSongsDataSucceeded({ payload: data }))
        )
      )
    ), { dispatch: true })

  // appStarted -> loadSongs
  appStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songsActions.loadSongData())
    )
  )

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetSongsResponse {
  data: SongEntity[]
}
