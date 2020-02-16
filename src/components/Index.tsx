import React from 'react'
import { Link } from 'react-router-dom'

const Index = (): React.ReactElement => {
  return (
    <>
      <h2>index</h2>
      <ul>
        <li>
          <Link to="counter">counter</Link>
        </li>
        <li>
          <Link to="todos">todos</Link>
        </li>
      </ul>
    </>
  )
}

export default Index
