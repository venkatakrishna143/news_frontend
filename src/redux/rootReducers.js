import { combineReducers } from "@reduxjs/toolkit";
import NewsReducer from './slices/News'
import AuthReducer from './slices/Auth'


export const rootReducers = combineReducers({
    news: NewsReducer,
    auth:AuthReducer
})