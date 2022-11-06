/* eslint-disable linebreak-style */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

