import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { mocked } from 'ts-jest'

import { getUser } from './get-user'

jest.mock('./get-user')
const mockGetUser = mocked(getUser, true)

describe('when everything is ok', () => {
  beforeEach(async () => {
    render(<App />)
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled())
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

describe('when the component fetches the user successfully', () => {
  beforeEach(() => {
    mockGetUser.mockClear()
  })

  test('should call getUser once', async () => {
    render(<App />)
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1))
  })
})
