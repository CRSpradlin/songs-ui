import { createAction } from "@ngrx/store";

export const countIncremented = createAction(
  '[app counter] count was incremented'
);

export const countDecremented = createAction(
  '[app counter] count decremented'
);

export const countReset = createAction(
  '[app counter] count reset'
);
