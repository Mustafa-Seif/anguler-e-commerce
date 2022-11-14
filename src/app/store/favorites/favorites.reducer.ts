import { createReducer, on } from "@ngrx/store"
import { from } from "rxjs"
import { ProData } from "src/app/interface/pro-data"
import { decreaseFavorites, increaseFavorites, resetFavorites } from "./favorites.action"
// import {addProductList,removeProductList}  from '../favorites/product.action'

interface favorites{
    favorites:number,
    items:Array<ProData>,

}

const initialState:favorites={
    favorites:0,
    items:[],
}

export const favoritesReducer =createReducer(
    initialState,
    on(increaseFavorites,(state,action):any=>({
        ...state,
        favorites:state.favorites +1,
        
    })),
    on(decreaseFavorites,(state,action):any=>({
        ...state,
        favorites:state.favorites -1,


    })),
    on(resetFavorites,(state,action):any=>({
        ...state,
        favorites:0
    })),
)