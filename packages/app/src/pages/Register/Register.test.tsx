import React from 'react'
import { render, screen } from '@testing-library/react'
import Register from './Register'

test('Renders the Register page correctly', () => {
  render(<Register />)
  expect(screen.getByText('Register New User')).toBeTruthy()
})
