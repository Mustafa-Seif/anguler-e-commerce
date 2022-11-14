import { createAction, props } from "@ngrx/store";

export const increaseFavorites =createAction(
    '[favorites page]increase favorites ',
    props<{favorites:number}>()
)
export const decreaseFavorites =createAction(
    '[favorites  page]decrease favorites ',
    props<{favorites:number
    }>()
)
export const resetFavorites =createAction(
    '[favorites  page]reset favorites ',
    props<{favorites:number}>()
)