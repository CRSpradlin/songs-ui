

import { Action } from "@ngrx/store";


export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 42
}

export function reducer(state: CounterState = initialState, action: Action) {
  return state;
}

