import React from 'react'
import TodoListItem from './TodoListItem'

type Props = {
  todos: string[]
  onDeleteTodo: (index: number) => void
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { todos, onDeleteTodo } = props

  const renderTodos = (): JSX.Element[] => {
    return todos.map((todo, i) => {
      const handleClickDelete = (): void => {
        onDeleteTodo(i)
      }
      return (
        <TodoListItem key={i} todo={todo} onClickDelete={handleClickDelete} />
      )
    })
  }

  return <ul>{renderTodos()}</ul>
}

export default TodoList
