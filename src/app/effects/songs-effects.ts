import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

import * as appActions from '../actions/app.actions';
import * as songsActions from '../actions/song.actions';
import { map } from "rxjs/operators";

@Injectable()
export class SongsEffects {

  // appStarted -> loadSongs
  appStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songsActions.loadSongData())
    )
  )

  constructor(private actions$: Actions, private client: HttpClient) { }
}
