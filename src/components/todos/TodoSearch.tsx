import React from 'react'

type Props = {
  query: string
  onChangeQuery: (query: string) => void
}

const TodoSearch: React.FC<Props> = (props: Props) => {
  const { query, onChangeQuery } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value
    onChangeQuery(value)
  }

  return (
    <>
      search: <input type="text" value={query} onChange={handleChange} />
    </>
  )
}

export default TodoSearch
