import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as actions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // when an action of "some type" happens:
  // - check localStorage for 'by'
  // - if it is there (e.g. not null)
  // - dispatch an action of type actions.coutBySet

  loudCountBy = createEffect(() => (
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(val => val !== null),
      map(by => parseInt(by, 10)),
      map(by => actions.countBySet({by}))
    )
  ), {dispatch: true});

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), {dispatch: false});

  // logItAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(action => console.log('Got an action of type ', action.type))
  //   ), { dispatch: false }
  // )

  constructor(private actions$: Actions) { }
}
