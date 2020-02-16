import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  getVisibleTodos,
  setQuery
} from '../ducks/todos'
import Component from '../components/todos/Index'

const Index = (): React.ReactElement => {
  const { loading, query, todos } = useSelector<RootState, RootState['todos']>(
    (state) => ({
      loading: state.todos.loading,
      query: state.todos.query,
      todos: getVisibleTodos(state.todos)
    })
  )

  const dispatch = useDispatch()
  const onChangeQuery = useCallback(
    (query: string) => dispatch(setQuery(query)),
    [dispatch]
  )
  const onFetchTodos = useCallback(() => fetchTodos()(dispatch), [dispatch])
  const onAddTodo = useCallback((todo: string) => addTodo(todo)(dispatch), [
    dispatch
  ])
  const onDeleteTodo = useCallback(
    (index: number) => deleteTodo(index)(dispatch),
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
