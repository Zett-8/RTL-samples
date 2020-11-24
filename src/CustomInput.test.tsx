import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CustomInput from './CustomInput'
import { mocked } from 'ts-jest'

import { getUser } from './get-user'

jest.mock('./get-user')
const mockGetUser = mocked(getUser, true)

describe('when everything is ok', () => {
  test('should call the onChange callback handler with fireEvent', () => {
    const onChange = jest.fn()
    render(<CustomInput value={''} onChange={onChange}>Input: </CustomInput>)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'David' }})
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should call the onChange callback handler with userEvent', async () => {
    const onChange = jest.fn()
    render(<CustomInput value={''} onChange={onChange}>Input: </CustomInput>)

    await userEvent.type(screen.getByRole('textbox'), 'David')
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
