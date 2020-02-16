const interval = 500

// mock db
const todos: string[] = [
  'Pass the exams',
  'Walk the dog',
  'Read a book',
  'Draw a painting'
]

export const listTodos = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos)
    }, interval)
  })
}

export const postTodo = (todo: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos.push(todo)
      resolve(todos)
    }, interval)
  })
}

export const deleteTodo = (index: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos.splice(index, 1)
      resolve(todos)
    }, interval)
  })
}
