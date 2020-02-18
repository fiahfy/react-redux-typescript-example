import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { increment, decrement } from '../ducks/counter'
import Component from '../components/counter/Index'

const Index = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.count)

  const dispatch = useDispatch()
  const onIncrement = useCallback(() => dispatch(increment()), [dispatch])
  const onDecrement = useCallback(() => dispatch(decrement()), [dispatch])

  const props = { count, onIncrement, onDecrement }

  return <Component {...props} />
}

export default Index
