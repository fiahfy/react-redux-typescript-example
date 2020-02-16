import { createSlice } from '@reduxjs/toolkit'

type State = {
  count: number
}

const initialState: State = {
  count: 0
}

const counter = createSlice({
  name: 'my-app/counter',
  initialState,
  reducers: {
    increment: (state): void => {
      state.count++
    },
    decrement: (state): void => {
      state.count--
    }
  }
})

export const { increment, decrement } = counter.actions

export default counter.reducer
