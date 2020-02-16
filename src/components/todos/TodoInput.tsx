import React, { useState } from 'react'

type Props = {
  onAddTodo: (todo: string) => void
}

const TodoInput: React.FC<Props> = (props: Props) => {
  const { onAddTodo } = props

  const [todo, setTodo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value
    setTodo(value)
  }

  const handleClick = (): void => {
    onAddTodo(todo)
  }

  return (
    <>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </>
  )
}

export default TodoInput
