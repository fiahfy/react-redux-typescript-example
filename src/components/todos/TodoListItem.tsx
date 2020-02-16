import React from 'react'

type Props = {
  todo: string
  onClickDelete: () => void
}

const TodoListItem: React.FC<Props> = (props: Props) => {
  const { todo, onClickDelete } = props

  return (
    <li>
      {todo} <button onClick={onClickDelete}>delete</button>
    </li>
  )
}

export default TodoListItem
