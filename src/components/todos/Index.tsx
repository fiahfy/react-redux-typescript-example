import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

type Props = {
  todos: string[]
  onAddTodo: (todo: string) => void
  onDeleteTodo: (index: number) => void
}

const Index: React.FC<Props> = (props: Props) => {
  const { todos, onAddTodo, onDeleteTodo } = props

  return (
    <>
      <h2>todos</h2>
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </>
  )
}

export default Index
