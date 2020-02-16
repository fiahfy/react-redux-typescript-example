import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoSearch from './TodoSearch'

type Props = {
  loading: boolean
  query: string
  todos: string[]
  onChangeQuery: (query: string) => void
  onFetchTodos: () => void
  onAddTodo: (todo: string) => void
  onDeleteTodo: (index: number) => void
}

const Index: React.FC<Props> = (props: Props) => {
  const {
    loading,
    query,
    todos,
    onChangeQuery,
    onFetchTodos,
    onAddTodo,
    onDeleteTodo
  } = props

  useEffect(() => {
    onFetchTodos()
  }, [])

  return (
    <>
      <h2>todos</h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div>
            <TodoSearch query={query} onChangeQuery={onChangeQuery} />
          </div>
          <div>
            <TodoInput onAddTodo={onAddTodo} />
          </div>
          <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
        </>
      )}
    </>
  )
}

export default Index
