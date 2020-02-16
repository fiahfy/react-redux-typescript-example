import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { addTodo, deleteTodo } from '../ducks/todos'
import Component from '../components/todos/Index'

const Index = (): React.ReactElement => {
  const todos = useSelector<RootState, string[]>((state) => state.todos.todos)
  const dispatch = useDispatch()
  const onAddTodo = useCallback((todo: string) => dispatch(addTodo(todo)), [
    dispatch
  ])
  const onDeleteTodo = useCallback(
    (index: number) => dispatch(deleteTodo(index)),
    [dispatch]
  )
  const props = { todos, onAddTodo, onDeleteTodo }
  return <Component {...props} />
}

export default Index
