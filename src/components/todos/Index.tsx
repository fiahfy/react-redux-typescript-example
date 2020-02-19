import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  visibleSelector,
  setQuery
} from '../../ducks/todos'
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
  }, [onFetchTodos])

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

const IndexContainer = (): JSX.Element => {
  const { loading, query, todos } = useSelector((state: RootState) => ({
    loading: state.todos.loading,
    query: state.todos.query,
    todos: visibleSelector(state.todos)
  }))

  const dispatch = useDispatch()
  const onChangeQuery = useCallback(
    (query: string) => dispatch(setQuery(query)),
    [dispatch]
  )
  const onFetchTodos = useCallback(() => dispatch(fetchTodos()), [dispatch])
  const onAddTodo = useCallback((todo: string) => dispatch(addTodo(todo)), [
    dispatch
  ])
  const onDeleteTodo = useCallback(
    (index: number) => dispatch(deleteTodo(index)),
    [dispatch]
  )

  const props = {
    loading,
    query,
    todos,
    onChangeQuery,
    onFetchTodos,
    onAddTodo,
    onDeleteTodo
  }

  return <Index {...props} />
}

export default IndexContainer
