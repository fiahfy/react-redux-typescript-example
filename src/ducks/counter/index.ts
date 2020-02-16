import { Reducer } from 'redux'

// types
const INCREMENT = 'my-app/counter/INCREMENT'
const DECREMENT = 'my-app/counter/DECREMENT'

type IncrementAction = {
  type: typeof INCREMENT
}
type DecrementAction = {
  type: typeof DECREMENT
}

type Action = IncrementAction | DecrementAction

// actions
export const increment = (): Action => {
  return {
    type: INCREMENT
  }
}
export const decrement = (): Action => {
  return {
    type: DECREMENT
  }
}

// reducer
type State = {
  count: number
}

const initialState: State = {
  count: 0
}

const reducer: Reducer<State, Action> = (state = initialState, action) => {
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
