/* We want to start with empty object and slowly add to it.

{

}

*/

import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer'

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.reducer
}

const selectCounterBranch = (state: AppState) => state.counter;

//Memoized selector for cached values for better performance
export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)
