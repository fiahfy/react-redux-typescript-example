import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  visibleSelector,
  setQuery
} from '../ducks/todos'
import Component from '../components/todos/Index'

const Index = (): React.ReactElement => {
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

  return <Component {...props} />
}

export default Index
