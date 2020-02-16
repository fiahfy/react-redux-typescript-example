import React from 'react'

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

export default Index
