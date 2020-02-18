const interval = 500

// mock db
let todos: string[] = [
  'Pass the exams',
  'Walk the dog',
  'Read a book',
  'Draw a painting'
]

const sleep = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, interval)
  })
}

export const listTodos = async (): Promise<string[]> => {
  await sleep()
  return [...todos]
}

export const postTodo = async (todo: string): Promise<string[]> => {
  await sleep()
  todos = [...todos, todo]
  return [...todos]
}

export const deleteTodo = async (index: number): Promise<string[]> => {
  await sleep()
  todos = todos.filter((_, i) => i !== index)
  return [...todos]
}
