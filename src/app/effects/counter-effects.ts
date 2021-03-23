import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as actions from '../actions/counter.actions'

@Injectable()
export class CounterEffects {

  // when an action of "some type" happens:
  // - check localStorage for 'by'
  // - if it is there (e.g. not null)
  // - dispatch an action of type actions.coutBySet
  

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
