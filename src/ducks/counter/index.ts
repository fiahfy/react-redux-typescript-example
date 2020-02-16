import { Reducer } from 'redux'

// types
const INCREMENT = 'my-app/counter/INCREMENT'
const DECREMENT = 'my-app/counter/DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT
  payload: undefined
}
interface DecrementAction {
  type: typeof DECREMENT
  payload: undefined
}

type ActionTypes = IncrementAction | DecrementAction

// actions
export const increment = (): ActionTypes => {
  return {
    type: INCREMENT,
    payload: undefined
  }
}
export const decrement = (): ActionTypes => {
  return {
    type: DECREMENT,
    payload: undefined
  }
}

// reducer
type State = {
  count: number
}

const initialState: State = {
  count: 0
}

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default reducer
