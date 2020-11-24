import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('when everything is ok', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('should render the app component without crashing', () => {
    screen.debug()
  })

  test('should select the children that is being passed to the CustomInput component', () => {
    screen.getByText('input:') // implicit assertion
  })

  test('should select the input element by its role', () => {
    screen.getByRole('textbox')
  })

  test('should select the label element by its text', () => {
    screen.getByLabelText('input:')
  })


  test('should not find the role "what" in our component', () => {
    expect(screen.queryByRole('what')).toBeNull()
  })
})
