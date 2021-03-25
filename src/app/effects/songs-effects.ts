import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import * as appActions from '../actions/app.actions';
import * as songActions from '../actions/song.actions';

Injectable()
export class SongsEffects{

  // appStarted -> LoadSongs
  appStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songActions.loadSongData())
    )
  )

  

  constructor(private actions$: Actions, private client:HttpClient) { }
}
