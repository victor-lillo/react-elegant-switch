import React from 'react'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react'
import ElegantSwitch from './ElegantSwitch'

test('renders ElegantSwitch', () => {
  render(<ElegantSwitch />)
  const lever = screen.getByRole('switch-lever')
  // console.log(prettyDOM(lever))
  expect(lever).toBeInTheDocument()
})

test('clicks ElegantSwitch', () => {
  const mockHandler = jest.fn()
  const component = render(<ElegantSwitch onChange={mockHandler} disabled />)
  const lever = component.getByRole('switch-lever')
  fireEvent.click(lever)
  expect(mockHandler.mock.calls).toHaveLength(1)
})
