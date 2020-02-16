import { Reducer, Dispatch } from 'redux'
import * as api from '../../mock-api'

// types
const SET_LOADING = 'my-app/todos/SET_LOADING'
const SET_QUERY = 'my-app/todos/SET_QUERY'
const SET_TODOS = 'my-app/todos/SET_TODOS'

type SetLoadingAction = {
  type: typeof SET_LOADING
  payload: boolean
}
type SetQueryAction = {
  type: typeof SET_QUERY
  payload: string
}
type SetTodosAction = {
  type: typeof SET_TODOS
  payload: string[]
}

type Action = SetLoadingAction | SetQueryAction | SetTodosAction

// actions
export const setLoading = (active: boolean): Action => {
  return {
    type: SET_LOADING,
    payload: active
  }
}
export const setQuery = (query: string): Action => {
  return {
    type: SET_QUERY,
    payload: query
  }
}
export const setTodos = (todos: string[]): Action => {
  return {
    type: SET_TODOS,
    payload: todos
  }
}

// operations
export const fetchTodos = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.listTodos()
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}
export const addTodo = (todo: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.postTodo(todo)
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}
export const deleteTodo = (index: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.deleteTodo(index)
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}

// selectors
export const getVisibleTodos = (state: State): string[] => {
  const { todos, query } = state
  return todos.filter((todo) => !query || todo.includes(query))
}

// reducer
type State = {
  loading: boolean
  query: string
  todos: string[]
}

const initialState: State = {
  loading: false,
  query: '',
  todos: []
}

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      const loading = action.payload
      return {
        ...state,
        loading
      }
    }
    case SET_QUERY: {
      const query = action.payload
      return {
        ...state,
        query
      }
    }
    case SET_TODOS: {
      const todos = action.payload
      return {
        ...state,
        todos: [...todos]
      }
    }
    default:
      return state
  }
}

export default reducer
