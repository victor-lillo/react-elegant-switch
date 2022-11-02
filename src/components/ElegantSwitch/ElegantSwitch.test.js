import React from 'react'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react'
import ElegantSwitch from './ElegantSwitch'

describe('<ElegantSwitch/>', () => {
  test('Render lever', () => {
    render(<ElegantSwitch />)
    const lever = screen.getByRole('switch-lever')
    expect(lever).toBeInTheDocument()
  })
  test('Render bar', () => {
    render(<ElegantSwitch />)
    const bar = screen.getByRole('switch-bar')
    expect(bar).toBeInTheDocument()
  })

  test('Click enabled', () => {
    const mockHandler = jest.fn()
    const component = render(<ElegantSwitch onChange={mockHandler} />)
    const lever = component.getByRole('switch-lever')
    fireEvent.click(lever)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Click disabled', () => {
    const mockHandler = jest.fn()
    const component = render(<ElegantSwitch onChange={mockHandler} disabled />)
    const lever = component.getByRole('switch-lever')
    fireEvent.click(lever)
    expect(mockHandler.mock.calls).toHaveLength(1)
  })
  test('Is enabled', () => {
    const component = render(<ElegantSwitch />)
    const lever = component.getByRole('switch-lever')
    expect(lever).toBeEnabled()
  })

  test('Is disabled', () => {
    const component = render(<ElegantSwitch disabled />)
    const lever = component.getByRole('switch-lever')
    expect(lever).toBeDisabled()
  })
})
