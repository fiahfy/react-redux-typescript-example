const interval = 500

// mock db
let todos: string[] = [
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
      todos = [...todos, todo]
      resolve(todos)
    }, interval)
  })
}

export const deleteTodo = (index: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos = todos.filter((_, i) => i !== index)
      resolve(todos)
    }, interval)
  })
}
