import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Index from './Index'

test('renders learn react link', () => {
  const { getByText } = render(
    <Router>
      <Index />
    </Router>
  )
  const linkElement = getByText(/index/i)
  expect(linkElement).toBeInTheDocument()
})
