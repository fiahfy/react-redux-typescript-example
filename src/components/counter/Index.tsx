import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { increment, decrement } from '../../ducks/counter'

type Props = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const Index: React.FC<Props> = (props: Props) => {
  const { count, onIncrement, onDecrement } = props

  return (
    <>
      <h2>counter</h2>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
      <div>count: {count}</div>
    </>
  )
}

const IndexContainer = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.count)

  const dispatch = useDispatch()
  const onIncrement = useCallback(() => dispatch(increment()), [dispatch])
  const onDecrement = useCallback(() => dispatch(decrement()), [dispatch])

  const props = { count, onIncrement, onDecrement }

  return <Index {...props} />
}

export default IndexContainer
