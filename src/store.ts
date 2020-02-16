import { combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './ducks/counter'
import todosReducer from './ducks/todos'

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({ reducer: rootReducer })

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
