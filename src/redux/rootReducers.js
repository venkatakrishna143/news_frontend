import { combineReducers } from "@reduxjs/toolkit";
import NewsReducer from './slices/News'


export const rootReducers = combineReducers({
    news:NewsReducer
})