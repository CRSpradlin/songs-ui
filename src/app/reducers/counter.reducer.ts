

import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 })),
  on(actions.countReset, () => initialState)
)

// CounterState Reducer(CounterState state, Action action) {}
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

