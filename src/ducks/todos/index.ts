import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit'
import { AppThunk } from '../../store'
import * as api from '../../mock-api'

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

const todos = createSlice({
  name: 'my-app/todos',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>): void => {
      state.loading = action.payload
    },
    setQuery: (state, action: PayloadAction<string>): void => {
      state.query = action.payload
    },
    setTodos: (state, action: PayloadAction<string[]>): void => {
      state.todos = action.payload
    }
  }
})

export const { setLoading, setQuery, setTodos } = todos.actions

export default todos.reducer

// operations
export const fetchTodos = (): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.listTodos()
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}
export const addTodo = (todo: string): AppThunk => async (
  dispatch
): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.postTodo(todo)
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}
export const deleteTodo = (index: number): AppThunk => async (
  dispatch
): Promise<void> => {
  dispatch(setLoading(true))
  const todos = await api.deleteTodo(index)
  dispatch(setTodos(todos))
  dispatch(setLoading(false))
}

// selectors
export const visibleSelector = createSelector(
  (state: State) => state.todos,
  (state: State) => state.query,
  (todos, query) => todos.filter((todo) => !query || todo.includes(query))
)
