import { createStore, combineReducers, compose } from 'redux'
import counterReducer from './ducks/counter'
import todosReducer from './ducks/todos'

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

// @see https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line @typescript-eslint/no-explicit-any

const enhancer = composeEnhancers()

const store = createStore(rootReducer, enhancer)

export default store
