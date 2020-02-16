import { Reducer } from 'redux'

// types
const ADD_TODO = 'my-app/todos/ADD_TODO'
const DELETE_TODO = 'my-app/todos/DELETE_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: string
}
interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: number
}

type ActionTypes = AddTodoAction | DeleteTodoAction

// actions
export const addTodo = (todo: string): ActionTypes => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}
export const deleteTodo = (index: number): ActionTypes => {
  return {
    type: DELETE_TODO,
    payload: index
  }
}

// reducer
type State = {
  todos: string[]
}

const initialState: State = {
  todos: []
}

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload
      return {
        ...state,
        todos: [...state.todos, todo]
      }
    }
    case DELETE_TODO: {
      const index = action.payload
      return {
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      }
    }
    default:
      return state
  }
}

export default reducer
